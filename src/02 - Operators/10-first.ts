import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

/**
 * Retorna el primer valor que cumpla con la condición del first.
 */

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap<MouseEvent>( console.log ),
    map( ({ clientX, clientY }) => ({ clientX, clientY }) ),
    first( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')   
    
});