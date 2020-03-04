import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Complete'),
}

/**
 * interval y timer son asincronos nativamente
 */

// Interval - Emite un valor cada cierto intervalo de tiempo
const interval$ = interval(1000);

// Timer - Emite un valor despues de cierto tiempo.

const hoyEn5 = new Date();// Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

//const timer$ = timer(2000);
//const timer$ = timer(2000, 1000);
const timer$ = timer( hoyEn5 );// Util para programar tareas o notificaciones.

console.log('Inicio');
//interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');

