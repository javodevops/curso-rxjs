import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur ) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur ) => acc + cur;

// Reduce - Emite un unico valor del acumulador cuando se completa el stream
from( numeros ).pipe(
    reduce( totalAcumulador, 0)
)
.subscribe( console.log );

// Scan - Cada vez que recibe un evento, scan emite un evento con el valor acumulado
from( numeros ).pipe(
    scan( totalAcumulador, 0)
)
.subscribe( console.log );

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'barry', autenticado: false, token: null },
    { id: 'barry', autenticado: true, token: 'ABC' },
    { id: 'barry', autenticado: true, token: 'ABC123' }
];

// Tanto scan como reduce, pueden utilizar un tercer valor (seed) para inicializar el acumulado
const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 29 })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );