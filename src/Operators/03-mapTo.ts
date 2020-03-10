import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

//Mediante el mapTo remplazamos el valor que retorna el KeyboardEvent
const keyupCode$ = keyup$.pipe(
    mapTo('Tecla presionada')
);



keyup$.subscribe( console.log );
keyupCode$.subscribe( code => console.log('mapTo', code ));