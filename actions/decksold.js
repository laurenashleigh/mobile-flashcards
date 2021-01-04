import { saveDeck } from '../utils/helpers'

export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const SAVE_SCORE = 'SAVE_SCORE';

export function recieveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export function saveScore(did, value) {
    return {
        type: SAVE_SCORE,
        did,
        value
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

//Adds new deck to the store
export function handleAddDeck(nameOfDeck) {
    return dispatch => {
        return saveDeck({nameOfDeck}).then(
            deck => {
                dispatch(addDeck(deck));
            }
        )
    }
}