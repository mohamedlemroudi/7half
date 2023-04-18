import Controller from './controller/Controller.js';
import Game from './modules/Game.js';
import ViewGame from './views/ViewGame.js';

const game = new Game();
const view = new ViewGame();

new Controller(game, view);
