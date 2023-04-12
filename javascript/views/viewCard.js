export default class viewCard{

    createCard(value, suit) {
        const suits = {
            '⚔️': 'spades',
            '💰': 'oros',
            '🏆': 'copas',
            '🥍': 'bastos'
        };

        return `
          <div>
            <span class="rank">${value}</span>
            <br>
            <span class="suit">${suit}</span>
          </div>
        `;
    }

}