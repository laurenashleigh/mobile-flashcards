import { getDecks } from '../utils/api';

export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export const recieveDecks = (decks) => {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export const addDeck = (title) => {
    return {
        type: ADD_DECK,
        title
    }
}

export const removeDeck = (did) => {
    return {
        type: REMOVE_DECK,
        did
    }
}

export const addCard = (did, card) => {
    return {
        type: ADD_CARD,
        payload: {
            did,
            card
        }
    }
}

export function handleRecieveDecks() {
    return dispatch => {
        return getDecks().then(
            decks => {
                dispatch(recieveDecks(decks))
            }
        )
    }
}