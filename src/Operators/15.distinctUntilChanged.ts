import { distinctUntilChanged } from "rxjs/operators";
import { from } from "rxjs";

/**
 * distinctUntilChanged - Controla los valores emitidos, según el operador equidad (===) 
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
    distinctUntilChanged( (ant, act ) => ant.nombre === act.nombre )
)
.subscribe( console.log );