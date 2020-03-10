import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

/**
 * distinct - Controla los valores emitidos, según el operador === restringiendo los repetidos.
 */

// const numeros$ = of(1,1,1,1,3,3,2,2,4,4,5,3,1);
const numeros$ = of<number|string>(1,'1',1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct() // utiliza ===
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Flash'
    },
    {
        nombre: 'Reverse Flash'
    },
    {
        nombre: 'Zoom'
    },
    {
        nombre: 'Captain Cold'
    },
    {
        nombre: 'Flash'
    },
]

from( personajes ).pipe(
    distinct( p => p.nombre )
)
.subscribe( console.log );