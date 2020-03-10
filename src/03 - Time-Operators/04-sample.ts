import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

/**
 * sample - Emite el último valor emitido por el observable
 * hasta que el valor emitido por el observable dentro de sample() emita otro valor.
 */
const interval$ = interval(500);

const click$ = fromEvent( document, 'click' );

interval$.pipe(
    sample( click$ )
)
.subscribe( console.log );

