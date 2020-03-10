import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

/**
 * sampleTime - Permite retornar el último valor emitido dentro de un periodo de tiempo.
 * 
 */
const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    sampleTime(2000), // Retorna el último valor emitido dentro de 2 segundos.
    map( ({ x, y }) => ({ x, y }) )
).subscribe( console.log );