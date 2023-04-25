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
  searchWinner(playerDeck, computerDeck) {
    const PUNTS_NECESSARIS = 7.5;

    if (playerDeck.resultatDeck === PUNTS_NECESSARIS) {
      console.log('Ha guanyat el jugador');
      return `Ha guanyat el ${playerDeck.getName()} 🥳🎉
        \n Punts  ${playerDeck.getName()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
    } else if (computerDeck.resultatDeck === PUNTS_NECESSARIS) {
      console.log('Ha guanyat el Banc');
      return `Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: ${playerDeck.resultatDeck}`;
    } else if (playerDeck.resultatDeck > 7.5) {
      console.log('Ha guanyat el Banc');
      return `Ha guanyat el Banc 🥳🎉
        \n No és necessari que jugui el Banc, 
        \n ja que te has passat.`;
    } else if (computerDeck.resultatDeck > 7.5) {
      return `Ha guanyat el ${playerDeck.getName()} 🥳🎉
        \n Punts ${playerDeck.getName()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
    } else if (computerDeck.resultatDeck === playerDeck.resultatDeck) {
      return `Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: ${playerDeck.resultatDeck}`;
    } else {
      /**
       * We extract the difference between PLAYER and those needed to win
       */
      const difJugador = PUNTS_NECESSARIS -playerDeck.resultatDeck;
      /**
       * We extract the difference that there is MACHINE
       * with those needed to win
       */
      const difMaquina = PUNTS_NECESSARIS - computerDeck.resultatDeck;

      console.log('Dif jug -> ', difJugador);
      console.log('Dif maq -> ', difMaquina);

      if (difJugador < difMaquina &&
        playerDeck.resultatDeck < PUNTS_NECESSARIS) {
        return `Ha guanyat el ${playerDeck.getName()} 🥳🎉
        \n Punts ${playerDeck.getName()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`;
      } else {
        return `Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: ${playerDeck.resultatDeck}`;
      }
    }
  }
}
