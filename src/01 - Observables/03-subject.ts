import { Observable, Observer, Subject } from "rxjs";

/**
 *  1. Casteo multiple / Muchas subscripciones suscritas al mismo observable
 *  2. Tambien es un observer
 *  3. Next, error y complete
 */

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('Completado' )     
}

const intervalo$ = new Observable<number>( subs => {
    
    const intervalID = setInterval(
        () => subs.next( Math.random() ), 1000
    );

    return () => {
        /**
         * No se ejecuta hasta aplicar el unsubscribe en la subscripcion.
         */
        clearInterval( intervalID );
        console.log('Intervalo destruido');
        
    };

});


const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );


// const subs1 = intervalos$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = intervalos$.subscribe( rnd => console.log('subs2', rnd) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    /**
     * Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observable".
     * 
     * Pero cuando la data es producida fuera del observable es llamado "Hot Observable"
     * 
     * Un Subject permite transformar un "Cold Observable" en un "Hot Observable"
     */
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500);