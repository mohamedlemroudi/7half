/**
 * Clase que representa el jurat del joc de cartes.
 *
 * @class
 * */
export default class Jury {
/**
 * Busca el ganador entre el mazo del jugador y el mazo de la computadora.
 *
 * @param {object} playerDeck - El mazo del jugador.
 * @param {object} computerDeck - El mazo de la computadora.
 * @return {string} - Devuelve un mensaje indicando quién ha ganado el juego.
 */
  buscarGuanyador(playerDeck, computerDeck) {
    const PUNTS_NECESSARIS = 7.5;

    if (playerDeck.resultatDeck === PUNTS_NECESSARIS) {
      console.log('Ha guanyat el jugador');
      return `Ha guanyat el ${playerDeck.getNom()} 🥳🎉
        \n Punts  ${playerDeck.getNom()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
    } else if (computerDeck.resultatDeck === PUNTS_NECESSARIS) {
      console.log('Ha guanyat el Banc');
      return `Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getNom()}: ${playerDeck.resultatDeck}`;
    } else {
      let difJugador;
      let difMaquina;
      /**
       * We extract the difference between PLAYER and those needed to win
       */
      if (playerDeck.resultatDeck - PUNTS_NECESSARIS > 0) {
        difJugador = playerDeck.resultatDeck - PUNTS_NECESSARIS;
      } else {
        difJugador = (playerDeck.resultatDeck - PUNTS_NECESSARIS) * -1;
      }
      /**
       * We extract the difference that there is MACHINE
       * with those needed to win
       */
      if (computerDeck.resultatDeck - PUNTS_NECESSARIS > 0) {
        difMaquina = computerDeck.resultatDeck - PUNTS_NECESSARIS;
      } else {
        difMaquina = (computerDeck.resultatDeck - PUNTS_NECESSARIS) * -1;
      }

      console.log('Dif jug -> ', difJugador);
      console.log('Dif maq -> ', difMaquina);

      if (difJugador < difMaquina &&
        playerDeck.resultatDeck < PUNTS_NECESSARIS) {
        return `Ha guanyat el ${playerDeck.getNom()} 🥳🎉
        \n Punts ${playerDeck.getNom()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
      } else if (difJugador < difMaquina &&
        computerDeck.resultatDeck > PUNTS_NECESSARIS) {
        return `Ha guanyat el ${playerDeck.getNom()} 🥳🎉
        \n Punts ${playerDeck.getNom()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
      } else {
        return `Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getNom()}: ${playerDeck.resultatDeck}`;
      }
    }
  }
}
