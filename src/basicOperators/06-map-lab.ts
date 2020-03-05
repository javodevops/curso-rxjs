import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper metus justo, eu accumsan metus vestibulum convallis. Sed ac lectus sed arcu rutrum mollis. Nulla leo lacus, porttitor non orci ornare, vehicula suscipit sapien. Donec sollicitudin tempus augue eu mollis. Morbi mollis, urna non congue mollis, enim quam egestas nulla, ut auctor quam risus a eros. In hac habitasse platea dictumst. Suspendisse porttitor pharetra velit. Vivamus porttitor diam nec pulvinar scelerisque. Etiam augue dolor, blandit et cursus eget, pretium et odio. In bibendum, tortor et ultricies euismod, sem mi feugiat quam, sed malesuada massa risus eget erat. Pellentesque euismod, nisl fermentum congue pretium, ipsum ligula mollis lacus, eget bibendum quam est vitae enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sed dolor mi. Integer et mollis massa.
<br/><br/>
Nulla pellentesque sem pulvinar turpis ullamcorper, id finibus quam bibendum. Fusce faucibus ipsum nec tellus molestie, ac maximus enim tincidunt. Duis blandit purus justo, malesuada condimentum urna malesuada tristique. Praesent accumsan non libero a interdum. Vestibulum gravida eros sit amet dolor hendrerit rutrum vel sed nisl. In rutrum a purus non iaculis. Nulla vel nunc fringilla, fringilla nibh et, finibus purus. In dapibus dapibus mi, sed sodales massa tempus sit amet. Mauris eleifend, turpis eget aliquet tincidunt, tellus felis hendrerit nisl, vel condimentum massa nulla id dui. In sagittis lorem id justo molestie hendrerit. Maecenas lobortis felis sit amet felis varius accumsan eu et nunc.
<br/><br/>
Morbi nisl purus, varius in lorem a, euismod pharetra augue. Morbi nulla augue, placerat in purus a, tempor iaculis dui. Aliquam dapibus feugiat nisl, at posuere purus commodo et. In ullamcorper nibh porttitor leo tempus, sed venenatis odio efficitur. Aliquam erat volutpat. Aliquam suscipit nibh ut tellus fermentum, et mattis urna aliquet. In quis laoreet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vestibulum sodales lorem ac aliquam. Nam et viverra sapien. Morbi rhoncus arcu maximus, vulputate sem eget, condimentum diam. Cras varius odio sit amet sapien gravida fermentum. Praesent turpis nunc, iaculis vel accumsan finibus, gravida id arcu. In tellus ligula, tempus sed finibus non, accumsan et ante.
<br/><br/>
Nullam sollicitudin sed ante vel fermentum. Ut ut erat tristique, condimentum mauris id, suscipit nunc. Ut convallis dignissim sapien, nec feugiat risus pellentesque sit amet. Vestibulum quis dignissim felis, ut tristique felis. Praesent id congue turpis. Curabitur eget eros dui. Aliquam urna nisl, faucibus sit amet dolor nec, volutpat interdum massa. Nulla vulputate tellus non tristique interdum. Nulla facilisi. Duis ac augue vitae risus laoreet malesuada. Donec id ex mi. Aliquam convallis, ex nec tempor euismod, neque velit gravida risus, a bibendum mauris lacus a odio. In gravida enim vitae molestie ultrices. Vivamus quis suscipit velit. Phasellus condimentum nunc sit amet vulputate condimentum.
<br/><br/>
Proin a feugiat nulla. Donec fermentum nulla dapibus, semper erat in, blandit metus. Etiam erat est, vulputate non placerat ac, volutpat in urna. Integer ultricies quam at tellus lacinia, at ullamcorper dui ullamcorper. Nunc finibus magna in ligula finibus pellentesque. Ut commodo nunc leo, non imperdiet justo rhoncus ac. Sed dapibus et dolor at ornare. Maecenas vehicula justo eget massa imperdiet fermentum. Mauris bibendum augue nulla, nec volutpat velit volutpat ac. Pellentesque facilisis, tortor ac tincidunt auctor, velit leo consequat sapien, a mattis purus ligula id lectus. Nunc tempus tortor lacus, vitae varius dolor maximus eget.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// función que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log({ scrollTop, scrollHeight, clientHeight });

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
    
}

//stream
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll( event ))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});
