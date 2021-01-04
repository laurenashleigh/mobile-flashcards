import {
    RECIEVE_CARDS,
    ADD_CARD,
    SAVE_RESULT
} from '../actions/cards';

export default function cardsReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_CARDS:
            return {
                ...state,
                ...action.cards
            };
        case ADD_CARD:
            const { card } = action;
            return {
                ...state,
                [card.id]: card
            }
        case SAVE_RESULT:
            const { cid, value } = action;
            return {
                ...state,
                [cid]: {
                    ...state[cid]
                }
            }
        default:
            return state;
    }
}
