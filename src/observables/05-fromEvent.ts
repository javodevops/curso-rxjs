import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

 const src1$ = fromEvent<MouseEvent>( document, 'click');
 const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

 const observer = {
     next: val => console.log('next', val)
     
 };

//  src1$.subscribe( observer );
//  src2$.subscribe( observer );
src1$.subscribe( ({ x, y }) => {// Se definen las propiedades que se requieren, dentro del parentesis ya se sabe que viene un objeto de tipo MouseEvent.
    console.log( x, y);
    
});

// Para poder acceder a las propiedades del evento es necesario definirlo en el fromEvent
src2$.subscribe( evento => {
    console.log( evento.key );
    
});