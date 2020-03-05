import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

/**
 * filter - filtra los datos según una condición. 
 */


// range(1,10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        
        return val % 2 === 1 
    })
)//.subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
];

from( personajes).pipe(
    filter( resp => resp.tipo === 'heroe')
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    //Pipes encadenados
    map( event => event.code ), // recibe un KeyboardEvent, sale un string
    filter( key => key === 'Enter' )
);

keyup$.subscribe( console.log );