import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

/**
 * map - permite transformar lo que emite el observable en algo que queramos ocupar o extraer.
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
)
keyupCode$.subscribe( code => console.log('map', code ));