import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { dirtyGold, eggBlue, codGrey  } from '../colours';
import { removeDeck } from '../actions/decks'
import { deleteDeck } from '../utils/api'
import { Entypo } from '@expo/vector-icons';


const styles = {
    deck: {
        borderWidth: 2,
        borderColor: dirtyGold,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        minWidth: 300,
        borderRadius: 6,
        marginBottom: 10,
        paddingBottom: 20
    },
    deckTitle: {
        fontSize: 30,
        color: eggBlue,
        padding: 20
    },
    deckSubtitle: {
        fontSize: 18,
        color: codGrey,
    },
    delete: {
        alignSelf: 'flex-end',
    }
}

const Deck = (props) => {

    const handleRemove = (title) => {
        const deckName = title.split(' ').join('')
        
        props.removeDeck(deckName)
        deleteDeck(deckName)
        props.navigation.navigate('DeckList')
    }
    return (
        <View style={styles.deck}>
            <TouchableOpacity style={styles.delete} onPress={() => handleRemove(props.title)}>
                <Entypo name="cross" size={28} color={codGrey} />
            </TouchableOpacity>
            <Text style={styles.deckTitle}>{props.title}</Text>
            <Text style={styles.deckSubtitle}>Cards: {props.length}</Text>
        </View>
    )
}
export default connect(null, {removeDeck})(Deck)
