import { interval, concat, of } from "rxjs";
import { take } from "rxjs/operators";

const interval$ = interval(1000);

/**
 * concat - La funcion concat permite ejecutar los observables de forma secuencial.
 * No se ejecuta el observable siguiente hasta que el anterior haya sido completado
 */

concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1,2,3)
).subscribe( console.log );