import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { codGrey, dirtyGold, blueLagoon, doveGrey } from '../colours';
import {handleRecieveDecks} from '../actions/decks'
import {connect} from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import Deck from './Deck';

const styles = StyleSheet.create({
    deck: {
        borderWidth: 2,
        borderColor: dirtyGold,
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
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    }
})

class DeckList extends React.Component {
    componentDidMount() {
        this.props.handleRecieveDecks();
    }
    
    render() {
        const { decks, navigation, state } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.pageTitle}>Your Decks:</Text>
                {Object.values(decks).map((deck) => {
                    return (
                        <View key={deck.title}>
                            <TouchableOpacity onPress={() => navigation.navigate('DeckInfo', { deck: deck })}>
                                <Deck title={deck.title} length={deck.cards.length} navigation={navigation}/>
                            </TouchableOpacity>
                        </View> 
                    )
                })}
                <TouchableOpacity style={styles.addBtn}><Entypo name="plus" size={32} color={blueLagoon} onPress={() => navigation.navigate('CreateDeck')}/></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        decks: state,
        state
    }
}

export default connect(mapStateToProps, {handleRecieveDecks})(DeckList);