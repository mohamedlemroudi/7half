import Controller from './controller/controller.js';
import Game from './model/game.js';
import View from './views/game.js';

const game = new Game();
const view = new View();

new Controller(game, view);
