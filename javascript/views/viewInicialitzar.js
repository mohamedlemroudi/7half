export default class viewInicialitzar {

    // Amb aquest metoda ho deixem tot preparat perquè el jugador pugui jugar
    inicialitzarJoc(playerDeck, computerDeck, canviDeTorn, posCard, deckMaster, MAXCARD) {
        // Variables
        playerDeck.resultatDeck = 0;
        computerDeck.resultatDeck = 0;
        deckMaster.buidar();
        deckMaster.amplanar();
        deckMaster.shuffle();
        console.clear();

        for (let i = 1; i <= MAXCARD; i++) {
            document.querySelector('.card-'+i).innerHTML = "";
        }
    }

}