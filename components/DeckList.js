import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { codGrey, dirtyGold, eggBlue, blueLagoon, doveGrey } from '../colours';
import {handleRecieveDecks} from '../actions/decks'
import {connect} from 'react-redux';
import { Entypo } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    deck: {
        borderWidth: 2,
        borderColor: dirtyGold,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        minWidth: 200,
        borderRadius: 6,
        marginBottom: 10,
        padding: 20,
        backgroundColor: doveGrey,
    },
    deckTitle: {
        fontSize: 30,
        color: blueLagoon,
        paddingLeft: 20,
        paddingRight:20,
    },
    deckSubtitle: {
        fontSize: 22,
        color: codGrey,
    },
    pageTitle: {
        fontSize: 30,
        color: blueLagoon,
        marginBottom: 30,
        alignSelf: 'center',
    },
    addBtn: {
        alignSelf: 'center',
        marginTop: 50,
        borderColor: dirtyGold,
        borderWidth: 2,
        padding: 5,
        borderRadius: 3
    }
})

class DeckList extends React.Component {
    componentDidMount() {
        this.props.handleRecieveDecks();
    }
    
    render() {
        const { decks, navigation } = this.props;
        return (
            <View>
            <Text style={styles.pageTitle}>Your Decks:</Text>
            {Object.values(decks).map((deck) => {
                return (
                    <View key={deck.title}>
                        <TouchableOpacity onPress={() => navigation.navigate('DeckInfo', { title: deck.title })}>
                            <View style={styles.deck}>
                                <Text style={styles.deckTitle}>{deck.title}</Text>
                                <Text style={styles.deckSubtitle}>Cards: {deck.cards.length}</Text>
                            </View>
                        </TouchableOpacity>
                    </View> 
                )
            })}
            <TouchableOpacity style={styles.addBtn}><Entypo name="plus" size={32} color={blueLagoon} /></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const decks = state
    return {
        decks
    }
}

export default connect(mapStateToProps, {handleRecieveDecks})(DeckList);