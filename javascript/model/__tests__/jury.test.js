/* eslint-disable */
import PlayerDeck from '../player.js';
import MachineDeck from '../machine.js';
import Jury from '../jury.js';

describe('Test Jury', () => {
  test('Unit Test searchWinner 1', () => {
    const jury = new Jury();
    const playerDeck = new PlayerDeck();
    const computerDeck = new MachineDeck();

    playerDeck.resultatDeck = 7.5;
    computerDeck.resultatDeck = 5;
    let result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
      ${playerDeck.getName()} 🥳🎉
        \n Punts  ${playerDeck.getName()}: ${playerDeck.resultatDeck} 
        \n Punts Banc: ${computerDeck.resultatDeck}`.replace(/\s/g, ''));

    playerDeck.resultatDeck = 6;
    computerDeck.resultatDeck = 5;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
    ${playerDeck.getName()} 🥳🎉
        \n Punts  ${playerDeck.getName()}: ${playerDeck.resultatDeck}
        \n Punts Banc: ${computerDeck.resultatDeck}`.replace(/\s/g, ''));

    computerDeck.resultatDeck = 15;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/\s/g, '')).toMatch(`Ha guanyat el 
    ${playerDeck.getName()} 🥳🎉
        \n Punts  ${playerDeck.getName()}: ${playerDeck.resultatDeck}
        \n Punts Banc: ${computerDeck.resultatDeck}`.replace(/\s/g, ''));

    playerDeck.resultatDeck = 5;
    computerDeck.resultatDeck = 5;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: 
        ${playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    computerDeck.resultatDeck = 7.5;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: 
        ${playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    playerDeck.resultatDeck = 6;
    computerDeck.resultatDeck = 7;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n Punts Banc: ${computerDeck.resultatDeck}
        \n Punts ${playerDeck.getName()}: 
        ${playerDeck.resultatDeck}`.replace(/[\s\n]/g, ''));

    playerDeck.resultatDeck = 15;
    computerDeck.resultatDeck = 5;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n No és necessari que jugui el Banc, 
        \n ja que te has passat.`.replace(/[\s\n]/g, ''));

    playerDeck.resultatDeck = 15;
    computerDeck.resultatDeck = 15;
    result = jury.searchWinner(playerDeck, computerDeck);
    expect(result.replace(/[\s\n]/g, '')).toMatch(`Ha guanyat el Banc 🥳🎉
        \n No és necessari que jugui el Banc, 
        \n ja que te has passat.`.replace(/[\s\n]/g, ''));
  });
});
