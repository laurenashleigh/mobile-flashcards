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

export const addCardToDeck = (title, card) => {
    const results = JSON.parse(AsyncStorage.getItem(DECKS_STORAGE_KEY))
    const deck = results[title]
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            cards: [...deck.cards].concat(card)
        }
    }))
}