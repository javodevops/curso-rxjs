import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

/**
 * mergeMap - Se suscribe a cada petición.
 * Retorna el valor de la subscripción interna y no tiene limite de subscripciones.
 * La salida final no se genera hasta que se completan todas las subscripciones de los observables.
 */
const letras$ = of('a', 'b', 'c');
 
letras$.pipe(
    mergeMap( ( letra ) => interval(1000).pipe(
        map( i => letra + i),
        take( 3 )
    ))
)
// .subscribe({

//     next: val => console.log('next', val),
//     complete: ()=> console.log('complete')
// });

const mousedown$ = fromEvent( document, 'mousedown' );
const mouseup$ = fromEvent( document, 'mouseup' );
const interval$ = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe( //mergeMap es otro operador a aplanamiento.
        takeUntil( mouseup$ )
    ))
).subscribe( console.log );