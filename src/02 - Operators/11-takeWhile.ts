import { fromEvent } from "rxjs";
import { map, takeWhile, tap, last } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    tap( t => console.log(t)),
    map( ({ x, y }) => ({ x, y }) ),

    /**
     * takeWhile - limita el número de emiciones hasta que la condición se cumpla.
     */

    // takeWhile( ({ y }) => y <= 150 )
    takeWhile( ({ y }) => y <= 150, true ) // Incluye y emite el valor que rompe el ciclo.
    

)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});