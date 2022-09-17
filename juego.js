//DECLARANDO VARIABLES NECESARIAS
let palabra;
let errores = 0;
let aciertos = 0;

const palabras = ['manzanas', 'Camiseta','caramelos', 'amigo'];
const btn = id('jugar');
const imagen = id( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );
//EMPEZANDO JUEGO
btn.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    errores = 0;
    aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabra = palabras[ valor_al_azar ];
    console.log( palabra );
    const cant_letras = palabra.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; 
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabra.toLowerCase( ); 

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
         
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        errores++;
        const source = `img/img${errores}.png` ;
        imagen.src = source;
    }

    if( errores == 4 ){
        id('resultado').innerHTML ="Has perdido, la palabra es: " + palabra;
        terminarJuego( );
    }else if( aciertos == palabra.length ){
        id('resultado').innerHTML = "¡Felicidades, ganaste!";
        terminarJuego( );
    }
}

function terminarJuego( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }
    btn.disabled = false;
}


terminarJuego( );