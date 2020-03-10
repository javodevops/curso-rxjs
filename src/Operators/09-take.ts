import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/**
 * take - limita el número de emiciones que retornara la data y cancela la ejecución del observable
 */
const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( t => console.log('tap', t )),
    take(3)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
});