import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('Completado' )     
}

const intervalos$ = new Observable<number>( subscriber => {
    
    //Crear contador 1,2,3,4...
    let count = 0;

    const interval = setInterval( () => {

        count++;
        subscriber.next( count );
        console.log(count);
        
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intevalo destruido!'); 
    }

});

const subs = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

//Encadenado de subscripciones
subs.add( subs2 )
    .add( subs3 );
    
setTimeout( () => {

    // Al estar encadenadas las subscripciones. El unsubscribe se ejecuta en cada una de ellas.
    subs.unsubscribe(); 
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    
    console.log('Completado timeout!');
    
}, 6000);