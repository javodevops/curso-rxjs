import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    )/*.pipe(
        catchError( err => of(err)) 
        //Tambien se pueden controlar los errores de forma individual
        //Así no se interrumpe la ejecución del código.
    )*/,
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    )
        

}).pipe(
    catchError( err => of( err.message ))
)
.subscribe( console.log );