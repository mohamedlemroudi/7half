import Player from "./Player.js";

export default class MaquinaDeck extends Player{
    constructor() {
        super();
    }

    jugarMaquina(computerDeck, deckMaster, canviDeTorn, posCard, MAXCARD) {
        while (canviDeTorn && posCard <= MAXCARD) {
            computerDeck.jugada(deckMaster, posCard);
            posCard++;

            if (computerDeck.resultatDeck > 6) {
                canviDeTorn = false;
            }
        }
    }
}