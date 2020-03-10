import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent( document, 'click' );

/**
 * debounceTime - Controla las emisiones aplicando un delay de tiempo.
 * Estas emisiones no son acumulables por lo cual unicamente permite una entre cada emisión.
 */

// Ejemplo 1
click$.pipe(
    debounceTime(3000) 
)
//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    debounceTime(1000),// Retrasa la emisión 1 segundo
    pluck('target', 'value'),
    distinctUntilChanged() //Evita que se ejecute dos veces la emisión del mismo valor.
).subscribe( console.log );