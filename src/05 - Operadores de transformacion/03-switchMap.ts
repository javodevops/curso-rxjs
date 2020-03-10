import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

/**
 * switchMap - Operador que recibe un callback y retorna un observable,
 * se subscribe para hacer la emisión en la salida. 
 * En caso de recibir una nueva subscripción, la anterior se cancela para continuar escuchando a la última
 */

//Helpers
const mostrarUsuarios = ( usuarios: GithubUser[]) =>{
    
    console.log(usuarios);
    orderList.innerHTML = '';
    
    for( const usuario of usuarios ){

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url; 
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append( li );
    }
}

// Referencias 
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

//Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
    )),
    pluck<GithubUsersResp, GithubUser[]>('items')
)//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap( texto => ajax.getJSON( url + texto ) )
)
.subscribe( console.log );