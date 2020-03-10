import { of } from "rxjs";

/**
 * of - Función que permite crear observables en base a un listado de elementos.
 */

 
// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6]); Uso del operador spread '...'
const obs$ = of<any>( [1,2], {a:1, b:2}, function(){}, Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')    
);
console.log('Fin del obs$');