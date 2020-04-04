import { of, range, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5,6,7,8,9,10);

/**
 * Range emite un rango de valores desde una posición determinada hasta un número de veces.
 */

//Emite los cinco valores consecutivos siguientes
const src$ = range(1,5, asyncScheduler); //asyncScheduler lo vuelve su comportamiento asincrono.

console.log('Inicio');

src$.subscribe( console.log );

console.log('Fin');