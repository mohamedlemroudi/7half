/* eslint-disable */
import Game from '../game';
class FooController {
  constructor(model, view) {
  }

  onApostaClick() {
  }
  onPlantarClick() {
  }

  onTornarJugarClick() {
  }

  getResult(visible) {
  }

  insertValue(cards, posCard) {
  }
}

describe('Test Game', () => {
  test('Unit Test resetGame', () => {
    const game = new Game();
    game.resetGame();
    expect(game.posCard).toBe(0);
    expect(game.playerDeck.resultatDeck).toBe(0);
    expect(game.computerDeck.resultatDeck).toBe(0);
    for (let i = 0; i < game.deckMaster.cards; i++) {
      expect(game.deckMaster.cards[i]).not.toBe('');
    }
    expect(Game.finishGame).toBe(false);
  });

  test('Unit Test playCard', () => {
    const game = new Game();
    game.resetGame();
    const controller = new FooController();
    game.init(controller);
    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 7.0;
    let initialLengthPlayer = game.playerDeck.cards.length;
    let initialLengthComputer;
    game.playCard(0);
    expect(game.playerDeck.cards.length).toBeGreaterThan(initialLengthPlayer);

    initialLengthComputer = game.computerDeck.cards.length;
    initialLengthPlayer = game.playerDeck.cards.length;
    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 8.0;
    game.playCard(0);
    expect(game.playerDeck.cards.length).toBe(initialLengthPlayer);
    expect(game.computerDeck.cards.length).toBe(initialLengthComputer);
  });

  test('Unit Test playMachine', () => {
    const game = new Game();
    const controller = new FooController();
    game.init(controller);
    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 7.0;
    game.playMachine();
    expect(game.computerDeck.resultatDeck).toBeGreaterThan(0);

    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 8;
    game.playMachine();
    expect(game.computerDeck.resultatDeck).toBe(0);
  });

  test('Unit Test playMachine', () => {
    const game = new Game();
    const controller = new FooController();
    game.init(controller);
    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 7.0;
    game.playMachine();
    expect(game.computerDeck.resultatDeck).toBeGreaterThan(0);

    game.computerDeck.resultatDeck = 0;
    game.playerDeck.resultatDeck = 8;
    game.playMachine();
    expect(game.computerDeck.resultatDeck).toBe(0);
  });
});

describe('Test Jury', () => {
  test('Unit Test getWinner', () => {
    const game = new Game();

    game.playerDeck.resultatDeck = 7.5;
    game.computerDeck.resultatDeck = 5;
    let result = game.getWinner();
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
      ${game.playerDeck.getName()} 🥳🎉
        \n Punts  ${game.playerDeck.getName()}: ${game.playerDeck.resultatDeck} 
        \n Punts Banc: ${game.computerDeck.resultatDeck}`.replace(/\s/g, ''));

    game.playerDeck.resultatDeck = 6;
    game.computerDeck.resultatDeck = 5;
    result = game.getWinner();
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
    ${game.playerDeck.getName()} 🥳🎉
        \n Punts  ${game.playerDeck.getName()}: ${game.playerDeck.resultatDeck}
        \n Punts Banc: ${game.computerDeck.resultatDeck}`.replace(/\s/g, ''));

    game.computerDeck.resultatDeck = 15;
    result = game.getWinner();
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
    ${game.playerDeck.getName()} 🥳🎉
        \n Punts  ${game.playerDeck.getName()}: ${game.playerDeck.resultatDeck}
        \n Punts Banc: ${game.computerDeck.resultatDeck}`.replace(/\s/g, ''));

    game.playerDeck.resultatDeck = 5;
    game.computerDeck.resultatDeck = 5;
    result = game.getWinner();
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${game.computerDeck.resultatDeck}
        \n Punts ${game.playerDeck.getName()}: 
        ${game.playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    game.computerDeck.resultatDeck = 7.5;
    result = game.getWinner();
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${game.computerDeck.resultatDeck}
        \n Punts ${game.playerDeck.getName()}: 
        ${game.playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    game.playerDeck.resultatDeck = 6;
    game.computerDeck.resultatDeck = 7;
    result = game.getWinner();
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${game.computerDeck.resultatDeck}
        \n Punts ${game.playerDeck.getName()}: 
        ${game.playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    game.playerDeck.resultatDeck = 15;
    game.computerDeck.resultatDeck = 5;
    result = game.getWinner();
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n No és necessari que jugui el Banc, 
        \n ja que te has passat.`.replace(/[\s\n]/g, ''));

    game.playerDeck.resultatDeck = 15;
    game.computerDeck.resultatDeck = 15;
    result = game.getWinner();
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n No és necessari que jugui el Banc, 
        \n ja que te has passat.`.replace(/[\s\n]/g, ''));
  });
});
