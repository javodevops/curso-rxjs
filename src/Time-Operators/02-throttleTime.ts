import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent( document, 'click' );

/**
 * throttleTime - Controla las emisiones aplicando un delay de tiempo luego de la emisión.
 */

// Ejemplo 1
click$.pipe(
    throttleTime(3000) 
)
//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    throttleTime(1000, asyncScheduler,{
        leading: true, // Escucha el primer valor de busqueda
        trailing: true // Espera hasta que el valor de busqueda sea completado (final).
    }),
    pluck('target', 'value'),
    distinctUntilChanged() //Evita que se ejecute dos veces la emisión del mismo valor.
).subscribe( console.log );