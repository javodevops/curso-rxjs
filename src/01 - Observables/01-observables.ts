// Desde la libreria rxjs se accede a las funciones para crear observables
import { Observable, Observer } from "rxjs";


//El Observer es una Interfaz
const observer: Observer<any> = {
    next: value => console.log('siguiente[]:', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('Completado [obs]' )     
}

// const obs$ = Observable.create() - Metodo estatico de creación
const obs$ = new Observable<string>( subs => {
    subs.next('Hola loco');
    subs.next('Que Hace!');

    //Forzar error
    // const a = undefined;
    // a.nombre = 'Flash';
    subs.complete();//Indica que ya no emitira nada más en la subscripción

    subs.next('Hola loco');
    subs.next('Que Hace!');
});

obs$.subscribe( observer );
// obs$.subscribe( console.log );
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );