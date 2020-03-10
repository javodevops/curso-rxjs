import { of, interval, forkJoin } from "rxjs";
import { take } from "rxjs/operators";

const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe( take( 3 ) );
const letras$ = of('a', 'b', 'c');

/**
 * forkJoin - Función que puedes recibir varios observables
 * retorna un observable que contiene la concatenación del último valor de cada subscrición.
 * Esto se genera unicamente cuando todas las subscripciones han sido completadas.
 */

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// )
// .subscribe( console.log );

// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// )
// .subscribe( resp => {
//     console.log('números: ', resp[0] );
//     console.log('intérvalo: ', resp[1] );
//     console.log('letras: ', resp[2] ); 
// });

// forkJoin({
//     numeros$,
//     interval$,
//     letras$
// })
// .subscribe( resp => {
//     console.log( resp );
    
// });

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
})
.subscribe( resp => {
    console.log( resp );
    
});