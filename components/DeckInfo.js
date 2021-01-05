import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { codGrey, dirtyGold, eggBlue, blueLagoon, white } from '../colours';
import {connect} from 'react-redux';
import Deck from './Deck';

const styles = StyleSheet.create({
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
        marginBottom: 10,
    },
    deckSubtitle: {
        fontSize: 18,
        color: codGrey,
    },
    pageTitle: {
        fontSize: 30,
        color: blueLagoon,
        marginBottom: 30
    },
    btn1: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: dirtyGold,
        borderRadius: 3,
        marginBottom: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn2: {
        backgroundColor: dirtyGold,
        borderWidth: 1,
        borderColor: blueLagoon,
        borderRadius: 3,
        marginBottom: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText1: {
        color: dirtyGold,
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10,
    },
    btnText2: {
        color: white,
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10
    },
    inlineBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

class DeckInfo extends React.Component {
    render() {
        const { deck, navigation, title } = this.props
       return (
        <View>
             <Deck title={title} length={deck.cards.length}/>
             {console.log('nav', navigation)}
             {console.log('params', navigation.state.params.deck.title)}
             {console.log('title', title)}
             {console.log('deck', deck)}
            <View style={styles.inlineBtns}>
                <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('AddCard', {title: {title}})}>
                    <Text style={styles.btnText1}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Quiz', {deck: deck})}>
                    <Text style={styles.btnText2}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        ) 
    }
    
}

function mapStateToProps(state, {navigation}) {
    const title = navigation.state.params.deck.title
    const deck = navigation.state.params.deck
    return {
        deck,
        title
    }
}

export default connect(mapStateToProps)(DeckInfo);