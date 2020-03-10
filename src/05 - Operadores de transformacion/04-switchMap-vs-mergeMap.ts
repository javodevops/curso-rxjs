import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

/**
 * switchMap VS mergeMap
 */
const click$ = fromEvent( document, 'click' );
const interval$ = interval(1000);   

click$.pipe(
    switchMap( () => interval$ ) //Al generarse un nuevo click, cancela la subscrición anterior e inicia una nueva
    // mergeMap( () => interval$ ) //Genera y mantiene una subscripción por cada click
)
.subscribe( console.log );