import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

/**
 * startWith - Tal y como indica su nombre comienza la emisión con el o los valores definidos.
 * endWith - Tal y como indica su nombre finaliza la emisión con el o los valores definidos.
 */

const numeros$ = of(1,2,3).pipe( //of por defecto es sincrono
                    startWith('a', 'b', 'c'),
                    endWith('x', 'y', 'z')
                );

numeros$.subscribe( console.log );