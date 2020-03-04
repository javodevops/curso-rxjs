import { of, range, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5,6,7,8,9,10);

//Emite los cinco valores consecutivos siguientes
const src$ = range(1,5, asyncScheduler); //asyncScheduler lo vuelve su comportamiento asincrono.

console.log('Inicio');

src$.subscribe( console.log );

console.log('Fin');