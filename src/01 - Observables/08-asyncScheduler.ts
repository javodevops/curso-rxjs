import { asyncScheduler } from "rxjs";

/**
 * asyncScheduler - Permite crear un setTimeout y setInterval, usando una subscripción.
 */

 
// setTimeout( () => {}, 3000);
// setInterval( () => {}, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

//asyncScheduler.schedule( saludar, 2000); //Ejecuta la función a los 2 segundos
//asyncScheduler.schedule( saludar2, 2000, 'Barry'); //Ejecuta la función y pasa un parametro en el state

const subs = asyncScheduler.schedule( function(state){

    console.log('state', state);

    this.schedule( state + 1, 1000);
    
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 );