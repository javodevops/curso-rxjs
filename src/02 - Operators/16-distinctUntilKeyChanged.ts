import { distinctUntilKeyChanged } from "rxjs/operators";
import { from } from "rxjs";

/**
 * distinctUntilKeyChanged - Controla los valores emitidos, según una condición definida como key
 * evitando que el valor actual sea emitido si es igual al valor anterior.
 */

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Flash'
    },
    {
        nombre: 'Flash'
    },
    {
        nombre: 'Zoom'
    },
    {
        nombre: 'Captain Cold'
    },
    {
        nombre: 'Captain Cold'
    },
]

from( personajes ).pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe( console.log );