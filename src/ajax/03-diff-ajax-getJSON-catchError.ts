import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

// const url = 'https://api.github.com/users?per_page=5';
//const url = 'https://httpbin.org/delay/1';
const url = 'https://httpbin.org/error/1';

const manejaError = ( resp: AjaxError ) => {
    console.warn('error:', resp.message);
    // Se recomienda retornar algo para que el codigo siguiente pueda seguir ejecutandose.
    return of({
        ok: false,
        usuarios: []
    })
    
}
//De este modo recibimos la data de la petición
// const obs$ = ajax.getJSON( url ).pipe(
//     catchError( manejaError )
// );
// const obs2$ = ajax( url ).pipe(
//     catchError( manejaError )
// );

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

/**
 * 
 * DIFERENCIA ENTRE getJSON y ajax
 

    // getJSON - Información sobre la respuesta
    obs$.subscribe( data => console.log('getJSON:', data) );

    // Más información sobre Request, Response, Status code, etc..
    obs2$.subscribe( data => console.log('ajax:', data) );

*/

obs$.pipe(
    catchError( manejaError )// De este modo se controla el error usando la función que lo maneja.
).subscribe({
    next: val => console.log('next:', val ),
    error: err => console.log('error:', err ),
    complete: () => console.log('Complete')   
});