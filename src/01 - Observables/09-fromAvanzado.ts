import { from, of } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = crea un observable en base a un array, promise, iterable, observable...
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Complete')     
};

// Función generadora de JS
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for ( let id of miIterable ){
//     console.log( id );
// }

from( miIterable ).subscribe( observer );

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Eobard');

const source$ = from( fetch('https://api.github.com/users/klerith'));
// fetch permite realizar una petición http (JS)

// source$.subscribe( async(resp) => {
    
//     console.log( resp.ok  );
    
//     const dataResp = await resp.json(); //Conversión de ReadableStream a Json
//     console.log( dataResp );
    
// });


// source$.subscribe( observer ); 