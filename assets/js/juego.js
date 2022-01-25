
let deck = [];

const crearDeck = () => {
    for (let i = 2; i<=10;i++){
        deck.push(i+"C");
    } 
}

crearDeck();
console.log(deck);