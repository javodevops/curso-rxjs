import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";

/**
 * exhaustMap - Se subscribe al observable (src).
 * Ignora nuevas subscripciones hasta que la anterior sea completada.
 * Los valores no se concatenan hasta que el observable anterior se completa.
 */

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );
