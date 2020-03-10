import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

/**
 * Petición ajax y manejo de errores con AjaxError
 */

// const url = 'https://api.github.com/usersxxx?per_page=5'; caso en fallo

const url = 'https://api.github.com/users?per_page=5';


// Función para manejar errores
const manejaErrores = ( response?: Response ) => {

    if (!response.ok ) {
        throw new Error( response.statusText );
    }
}

// Manejo de errores mediante función de flecha y AjaxError
const atrapaError = ( err: AjaxError ) => {
    console.warn('error en:', err.message );
    return of([]);
}
const fetchPromesa = fetch( url );

// fetchPromesa
// .then( resp => resp.json() )
// .then( data => console.log('data', data) )
// .catch( err => console.warn('Error en usuarios', err ));

// fetchPromesa
//     .then( resp => resp.json())
//     .then( manejaErrores )
//     .then( data => console.log('data', data) )
//     .catch( err => console.warn('Error en usuarios', err ));

ajax( url ).pipe(
    // map( resp => resp.response )
    pluck( 'response' ), // Emite la data
    catchError( atrapaError ) // Controla errores

).subscribe( users => console.log('usuarios:', users) );