import {
    RECIEVE_DECKS,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD
} from '../actions/decks';

//Adds new deck to state
const decks = (state = {}, action) => {
    switch (action.type) {
      case RECIEVE_DECKS:
        return {
          ...state,
          ...action.decks
        };
      case ADD_DECK:
        return {
          ...state,
          [action.title]: {
            title: action.title,
            cards: []
          }
        };
      case REMOVE_DECK:
        const { did } = action;
        return {
          ...state.filter(deck => deck.id !== did)
        };
      case ADD_CARD:
        return {
          ...state,
          [action.payload.did]: {
            ...state[action.payload.did],
            cards: state[action.payload.did].cards.concat(action.payload.card)
          }
        }
      default:
        return state;
    }
  }

  export default decks