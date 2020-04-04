import { range, fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

/**
 * pluck - permite extraer un valor especifico del objeto y definirlo como salida del observable.
 */

// range(1,5).pipe(
//     // map<number, number>( val => val * 10 )
//     map<number, string>( val => (val * 10).toString() )
// )
// .subscribe( console.log);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

//Mediante el map extraemos el codigo de la tecla presionada en el KeyboardEvent
const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'attributeStyleMap', 'size')
    // Acceder a la propiedad dentro de una propiedad, similar a notación de puntos pero con comas
);

keyup$.subscribe( data => console.log('Evento: ', data) );
keyupCode$.subscribe( code => console.log('map', code ));
keyupPluck$.subscribe( code => console.log('pluck', code ));