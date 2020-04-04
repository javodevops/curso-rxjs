/**
 * Se define la importación dentro de llaves debido a que son objetos,
 * de otro modo es la asignación de un elemento desde el from a una variables dentro de comillas simples ''
 */
import { Observable, Observer } from 'rxjs';


//El Observer es una Interfaz que escucha los valores de un obsevable
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

    //Se llama el método complete de la subscripción, el cual indica el termino y cierre.
    subs.complete();

    subs.next('Hola loco');
    subs.next('Que Hace!');
});

/**
 * Para que la cadena de eventos del Observable se ejecute, deben tener una subscripcion.
 * Cada vez que te suscribes se realiza una nueva ejecución del ciclo de evento de datos.
 * */ 
obs$.subscribe( observer );

// obs$.subscribe( console.log );
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );