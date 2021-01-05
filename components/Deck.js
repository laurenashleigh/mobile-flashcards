import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { dirtyGold, eggBlue, codGrey  } from '../colours';

const styles = {
    deck: {
        borderWidth: 1,
        borderColor: dirtyGold,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        minWidth: 150,
        borderRadius: 6,
        marginBottom: 50,
        padding: 20,
    },
    deckTitle: {
        fontSize: 30,
        color: eggBlue,
        // marginBottom: 10,
    },
    deckSubtitle: {
        fontSize: 18,
        color: codGrey,
    }
}

const Deck = (props) => {
    return (
        <View style={styles.deck}>
            {console.log('props', props.title)}
            {console.log('length', props.length)}
            <Text style={styles.deckTitle}>{props.title}</Text>
            <Text style={styles.deckSubtitle}>Cards: {props.length}</Text>
        </View>
    )
}
export default Deck;

// class Deck extends React.Component {
//     render() {
//         const { deck } = this.props
//         return (
//             <View style={styles.deck}>
//                 <Text style={styles.deckTitle}>TITLE</Text>
//                 <Text style={styles.deckSubtitle}>Cards: 2</Text>
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state, { id }) => {
//     const deck = state[id]
//     return {
//         deck,
//     }
// }

// export default connect(mapStateToProps)(Deck)