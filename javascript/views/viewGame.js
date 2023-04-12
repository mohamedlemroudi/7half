import Deck from "../modules/Deck.js";
import PlayerDeck from "../modules/Player.js";
import Jurat from "../modules/Jurat.js";
import viewInicialitzar from "./viewInicialitzar.js";
import MaquinaDeck from "../modules/MaquinaDeck.js";

export default class ViewGame {
    // Constants
    MAXCARD = 10;

    // són els tres botons que tenim en el panel
    btnPlantar = document.getElementById('plantar');
    btnAposta = document.getElementById('aposta');
    btnTornarJugar = document.getElementById('tornar_jugar');

    deckMaster = new Deck();
    playerDeck = new PlayerDeck();
    computerDeck = new MaquinaDeck();
    jutga = new Jurat();
    canviDeTorn = false;
    posCard = 1;
    iniciarJoc = new viewInicialitzar();

    constructor() {
        this.deckMaster.buidar();
        this.deckMaster.amplanar();
        this.deckMaster.shuffle();

        this.btnAposta.addEventListener("click", () => {
            if (this.playerDeck.resultatDeck <= 7.5 && !this.canviDeTorn && this.posCard <= (this.MAXCARD/2)) {
                this.playerDeck.jugada(this.deckMaster, this.posCard);
                this.posCard++;

                if (this.playerDeck.resultatDeck > 7.5) {
                    this.canviDeTorn = true;
                    this.posCard = 6;
                    // juga la màquina
                    this.computerDeck.jugarMaquina(this.computerDeck, this.deckMaster, this.canviDeTorn, this.posCard, this.MAXCARD);
                    // Fem servir la clase Jutga per saber el guanyador
                    this.jutga.buscarGuanyador(this.playerDeck, this.computerDeck);
                }
            }
        });

        this.btnPlantar.addEventListener("click", () => {
            this.canviDeTorn = true;
            this.posCard = 6;
            // juga la màquina
            this.computerDeck.jugarMaquina(this.computerDeck, this.canviDeTorn, this.posCard, this.MAXCARD);
            // Fem servir la clase Jutga per saber el guanyador
            this.jutga.buscarGuanyador(this.playerDeck, this.computerDeck);
        });

        this.btnTornarJugar.addEventListener("click", () => {
            this.iniciarJoc.inicialitzarJoc(this.playerDeck, this.computerDeck, this.canviDeTorn, this.posCard, this.deckMaster, this.MAXCARD);
            this.canviDeTorn = false;
            this.posCard = 1;
        });
    }
}
