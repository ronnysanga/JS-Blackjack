
let   deck       = [];
const tipos      = ["C","D","H","S"];
const especiales = ["A","J","Q","K"];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias de Html
const btnPedir   = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");


const divCartasJugador    = document.querySelector("#jugador-cartas");
const divCartasComputador = document.querySelector("#computadora-cartas");


const puntosHTML = document.querySelectorAll("small");
//Funcion para agregar a la Lista deck las Cartas
const crearDeck = () => {
    for (let i = 2; i<=10;i++){    
        for (let tipo of tipos){
            deck.push(i+tipo);
        }
    } 
    for (let tipo of tipos){    
        for (let esp of especiales){
            deck.push(esp+tipo);
        }
    }
    deck = _.shuffle(deck);//Carta barajeada
    console.log(deck)
    return deck;
}


// console.log("Carta sin barajear")
crearDeck();//Cartas sin barajiar
// console.log(deck);
// console.log("C barajeada 1")
//deck = _.shuffle(deck);//Carta barajiadas
// console.log(deck);

const pedirCarta = () => {
    //Sirve para que si se cumple esta condicion ya para la funcion 
    if (deck.length === 0) {
        throw "No existen mas cartas";
    }

    let carta = deck.pop();
    console.log("Carta cogida:" + carta);
    console.log(deck);
    console.log("C barajeada 2 sin una");
    deck = _.shuffle(deck);
    console.log(deck);
    return carta;
}

const valorCarta = ( carta ) => {
    const valor = carta.slice(0,carta.length - 1);
    return(isNaN(valor))?((valor==="A")?11:10):valor*1;  
}

const turnoComputadora = ( puntosMinimos) => {
    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        //TRAER LA CARTA COMO IMAGEN EN LA WEB
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasComputador.append(imgCarta);

        if( puntosMinimos > 21 ){
            break;
        }

    }while( (puntosComputadora<puntosMinimos) && (puntosMinimos<=21));


    setTimeout(() => {
        if (puntosComputadora===puntosMinimos){
            alert("Nadie gana:(");
        }else if (puntosMinimos>21){
            alert("Computadora gana")
        }else if (puntosComputadora>21){
            alert("Jugador Gana");
        }else{
            alert("Computador gana")
        }        
    }, 15); //despues de 10 milesimas de segundo
    
}



//Eventos
btnPedir.addEventListener("click", ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    //TRAER LA CARTA COMO IMAGEN EN LA WEB
    const imgCarta = document.createElement("img") 
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21){
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    } else if (puntosJugador === 21){
        console.warn("21, genial");
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});

btnDetener.addEventListener("click",()=>{
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener("click",()=>{
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador     = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputador.innerText = "";
    divCartasJugador.innerText    = "";

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
