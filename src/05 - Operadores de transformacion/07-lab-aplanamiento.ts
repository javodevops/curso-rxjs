import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError( err => of('Datos invalidos') )
    )

// Creando formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in'

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPassword, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit')
                    .pipe(
                        tap( event => event.preventDefault() ), // Previene el comportamiento por defecto
                        map( event => ({
                            email: event.target[0].value,
                            password: event.target[1].value
                        })),
                        exhaustMap( peticionHttpLogin )
                    );

submitForm$.subscribe( token => {
    console.log( token );
    
});