import { ajax } from "rxjs/ajax";

//const url = 'https://httpbin.org/delay/1';
const url = 'https://httpbin.org/delay/1';

/**
 *  PETICIONES HTTP
 */

// Metodo - POST
ajax.post( url , {
    id: 'The Flash',
    nombre: 'Barry Allen'
}, {
    'token': 'ABC1234'
})
//.subscribe( console.log );


// Metodo  - PUT
ajax.put( url , {
    id: 'The Flash',
    nombre: 'Barry Allen'
}, {
    'token': 'ABC1234'
})
//.subscribe( console.log );

// Metodo DELETE
ajax.delete( url , {
    'token': 'ABC1234'
})
//.subscribe( console.log );


// En caso de que quisiera personalizar la petición para tener mayor control.
ajax({
    url: url, // Gracias a ES6 bastaria con poner 'url'
    method: 'POST',
    headers: {
        'token': 'ABC1234'
    },
    body: {
        id: 1,
        nombre: 'Eobard'
    }
}).subscribe( console.log );