import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { dirtyGold, eggBlue, codGrey  } from '../colours';
import { removeDeck } from '../actions/decks'
import { deleteDeck } from '../utils/api'
import { Entypo } from '@expo/vector-icons';


const styles = {
    deck: {
        borderWidth: 1,
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
        console.log('handleRemove title', deckName)
        
        removeDeck(deckName)
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
export default Deck;

// class Deck extends React.Component {

//     handleRemoveDeck = (did) => {
//         const { dispatch, navigation } = this.props
//         dispatch(removeDeck(did))
//         removeDeck(did)
//         navigation.goBack()
//     }
//     render() {
//         const { deckName } = this.props
//         return (
//             <View style={styles.deck}>
//                 <TouchableOpacity style={styles.delete} onPress={() => this.handleRemoveDeck(deckName.title)}>
//                     <Entypo name="cross" size={28} color={codGrey} />
//                 </TouchableOpacity>
//                 <Text style={styles.deckTitle}>{deckName.title}</Text>
//                 <Text style={styles.deckSubtitle}>Cards: {deckName.cards.length}</Text>
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state, { deck }) => {
//     const deckName = deck.title.split(' ').join('')
//     return {
//         deckName
//     }
// }

// export default connect(mapStateToProps)(Deck)