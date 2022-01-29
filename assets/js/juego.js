
let   deck       = [];
const tipos      = ["C","D","H","S"];
const especiales = ["A","J","Q","K"];

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
}
console.log("Carta sin barajear")
crearDeck();//Cartas sin barajiar
console.log(deck);
console.log("C barajeada 1")
deck = _.shuffle(deck);//Carta barajiadas
console.log(deck);

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
}

pedirCarta();

const valorCarta = ( carta ) => {
    carta.pop();
    const valor = carta;
    console.log(valor);
    console.log(isNaN(valor)||((valor==="A")?11:10));
    console.log(!(isNaN(valor))||(valor*1));  
    return valor;   
}

let valorr = valorCarta("AJ");
console.log(valorr);


