import { saveCard } from '../utils/helpers'

export const RECIEVE_CARDS = 'RECIEVE_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const SAVE_RESULT = 'SAVE_RESULT';

export function recieveCards(cards) {
    return {
        type: RECIEVE_CARDS,
        cards
    }
}

export function saveResult(cid, value) {
    return {
        type: SAVE_RESULT,
        cid,
        value
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    }
}

//Adds new card to the store
export function handleAddCard(cardQuestion, cardAnswer) {
    return dispatch => {
        return saveCard({cardQuestion, cardAnswer}).then(
            card => {
                dispatch(addCard(card));
            }
        )
    }
}