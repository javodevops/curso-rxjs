import { fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";

/**
 * merge - Método que permite combinar la emisión de uno o más observables
 * no se dispara el complete del subscribe hasta que se completen todos los observables.
 */
const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge( 
    keyup$.pipe(
        pluck('type')
    ), 
    click$.pipe(
        pluck('type')
    )
)
.subscribe( console.log );