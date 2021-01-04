function formatDeck({ nameOfDeck }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      name: nameOfDeck
    };
  }

export function saveDeck(deck) {
    return new Promise((res, rej) => {
        const formattedDeck = formatDeck(deck);

        setTimeout(() => {
        decks = {
            ...decks,
            [formattedDeck.id]: formattedDeck
        };

        res(formattedDeck);
        }, 1000);
    });
}

export function saveCard(card) {
    return new Promise((res, rej) => {
        const formattedCard = formatCard(card);

        setTimeout(() => {
        cards = {
            ...cards,
            [formattedCard.id]: formattedCard
        };

        res(formattedCard);
        }, 1000);
    });
}