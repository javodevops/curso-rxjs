import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

/**
 * auditTime - Emite el último valor emitido por el observable en un periodo de tiempo determinado.
 * En caso de que el observable se complete antes del tiempo definido en el auditTime, no emite ningun valor.
 */
const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x }) => x ),
    tap( val => console.log('tap', val) ),
    auditTime(2000) // Espera 2 segundo y emite el último valor emitido por el observable.
).subscribe( console.log );