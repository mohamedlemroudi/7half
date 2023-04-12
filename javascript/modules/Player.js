import Deck from "./Deck.js";
import viewCard from "../views/viewCard.js";

export default class Player extends Deck {
    constructor() {
        super();
        this.resultatDeck = 0;
    }

    // En aquest objecte i tenim el metode per crear l'escrutura html necessari per una carta
    htmlCard = new viewCard();

    jugada(deck, posCard) {
        this.push(deck.pop());
        let valorCard = parseInt(this.cards[this.cards.length-1].value);
        if (valorCard < 8) {
            this.resultatDeck += valorCard;
        }
        else {
            this.resultatDeck += 0.5;
        }
        let value = this.cards[this.cards.length-1].value;
        let suit = this.cards[this.cards.length-1].suit;
        document.querySelector('.card-'+posCard).innerHTML += this.htmlCard.createCard(value, suit);
        console.log("Resultat: ", this.resultatDeck);
    }
}