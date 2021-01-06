import AsyncStorage from '@react-native-community/async-storage';
import { decks } from './DATA'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export async function getDecks() {
    const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    // return JSON.parse(results);
    if (results === null) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    } else {
        return JSON.parse(results);
    }
}

export const getDeck = (id) => {
    const results = JSON.parse(AsyncStorage.getItem(DECKS_STORAGE_KEY));
    return results[id]
}

export const saveDeck = (title) => {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            cards: []
        }
    }))
}

export async function addCardToDeck(title, card) {
    // console.log('asyncStorage',AsyncStorage.getItem(DECKS_STORAGE_KEY))
    const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    const resultsObj = JSON.parse(results)
    const transformedTitle = title.split(" ").join("")

    const deck = resultsObj[transformedTitle]
    console.log('results ', typeof(resultsObj))
    console.log('deck ', deck)
    console.log('transformed title ', transformedTitle)
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [transformedTitle]: {
            cards: [...deck.cards].concat(card)
        }
    }))
}

// export const deleteDeck(did) {

// }