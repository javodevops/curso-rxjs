import { interval, fromEvent } from "rxjs";
import { take, concatMap } from "rxjs/operators";

/**
 * concatMap - Se subscribe a cada observable (src).
 * Emite los valores concatenando el último valor de los datos emitidos al completarse cada observable.
 * Los valores no se concatenan hasta que el observable anterior se complete.
 */

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

click$.pipe(
    concatMap( () => interval$ )
)
.subscribe( console.log );
