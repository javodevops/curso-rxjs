import { fromEvent, combineLatest } from "rxjs";
import { pluck, withLatestFrom } from "rxjs/operators";

/**
 * withLatestFrom - Similar a combine lastest, 
 * solo emite eventos en función del observable en el cual se esta aplicando.
 */
const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

// combineLatest( 
//     keyup$.pipe(
//         pluck('type')
//     ), 
//     click$.pipe(
//         pluck('type')
//     )
// )
// .subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';

input2.placeholder = '******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value' ));

withLatestFrom(
    getInputStream( input1 ),
    getInputStream( input2 )
);



