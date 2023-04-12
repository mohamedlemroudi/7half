export default class Jurat {
    buscarGuanyador(playerDeck, computerDeck) {
        // Són els punts necessaris per guanyar
        const PUNTS_NECESSARIS = 7.5;

        if (playerDeck.resultatDeck === PUNTS_NECESSARIS) {
            console.log("Ha guanyat el jugador");
        }
        else if (computerDeck.resultatDeck === PUNTS_NECESSARIS) {
            console.log("Ha guanyat la màquina")
        }
        else {
            let difJugador = (playerDeck.resultatDeck - PUNTS_NECESSARIS > 0) ? playerDeck.resultatDeck - PUNTS_NECESSARIS : (playerDeck.resultatDeck - PUNTS_NECESSARIS) * - 1;
            let difMaquina = (computerDeck.resultatDeck - PUNTS_NECESSARIS > 0) ? computerDeck.resultatDeck - PUNTS_NECESSARIS : (computerDeck.resultatDeck - PUNTS_NECESSARIS) * - 1;

            console.log("Dif jug -> ", difJugador);
            console.log("Dif maq -> ", difMaquina);

            if (difJugador <= difMaquina) {
                console.log("Ha guanyat el jugador");
            }
            else {
                console.log("Ha guanyat la màquina");
            }
        }
    }
}