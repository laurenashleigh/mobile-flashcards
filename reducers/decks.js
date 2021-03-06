import {
    RECIEVE_DECKS,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD
} from '../actions/decks';


const decks = (state = {}, action) => {
    switch (action.type) {
      case RECIEVE_DECKS:
        return {
          ...state,
          ...action.decks
        };
      case ADD_DECK:
        const deckName = action.title.split(' ').join('')
        return {
          ...state,
          [deckName]: {
            title: action.title,
            cards: []
          }
        };
      case REMOVE_DECK:
        let copy = {...state}
        delete copy[action.did]
        return {
          ...copy,
        };
      case ADD_CARD:
        const transformedDid = action.payload.did.split(' ').join('')
        return {
          ...state,
          [transformedDid]: {
            ...state[transformedDid],
            cards: state[transformedDid].cards.concat(action.payload.card)
          }
        }
      default:
        return state;
    }
  }

  export default decks