import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { codGrey, dirtyGold, blueLagoon, white, doveGrey } from '../colours';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import {connect} from 'react-redux';
import { setLocalNotification, clearLocalNotification } from '../utils/notifications';
import CardFlip from 'react-native-card-flip'

const styles = StyleSheet.create({
    deck: {
        borderWidth: 2,
        borderColor: dirtyGold,
        alignItems: 'center',
        alignSelf: 'center',
        width: 300,
        height: 350,
        borderRadius: 2,
        marginBottom: 50,
        marginTop: 30,
        padding: 50,
        paddingBottom: 100,
        backgroundColor: doveGrey,
    },
    cardTitle: {
        fontSize: 18,
        color: codGrey,
        paddingBottom: 10,
    },
    deckTitle: {
        fontSize: 18,
        color: codGrey,
        alignItems: 'flex-start',
        paddingBottom: 20,
        justifyContent: 'flex-start',
    },
    quizQuestion: {
        fontSize: 24,
        color: blueLagoon,
        paddingBottom: 40,
        paddingTop: 40,
        fontWeight: 'bold',
    },
    quizAnswer: {
        fontSize: 24,
        color: dirtyGold,
        fontWeight: 'bold',
        paddingTop: 40,
    },
    pageTitle: {
        fontSize: 30,
        color: blueLagoon,
        paddingBottom: 30
    },
    btn1: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: dirtyGold,
        borderRadius: 3,
        marginBottom: 20,
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    btn2: {
        backgroundColor: dirtyGold,
        borderWidth: 1,
        borderColor: blueLagoon,
        borderRadius: 3,
        marginBottom: 20,
        marginLeft: 5,
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn3: {
        backgroundColor: white,
        borderWidth: 2,
        borderColor: dirtyGold,
        borderRadius: 3,
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 22,
        color: blueLagoon,
        flexDirection: 'row',
        bottom: 0,
        margin: 20
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
    btn3Text: {
        color: blueLagoon,
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        alignSelf: 'center',
    },
    inlineBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        alignItems: 'center',
    },
    quizComplete: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
})
class Quiz extends React.Component {
    componentDidMount() {
        clearLocalNotification()
        setLocalNotification()
    }
    state = {
        cardNumber: 0,
        score: 0,
    }

    handleRestart = () => {
        this.setState({
            cardNumber: 0,
            score: 0,
        })
    }

    handleCorrectClick = () => {
        this.setState(prevState => ({
            score: prevState.score + 1,
            cardNumber: prevState.cardNumber +1,
        }))
    }

    handleIncorrectClick = () => {
        this.setState(prevState => ({
            cardNumber: prevState.cardNumber + 1,
        }))
    }

    handleGoHome = () => {
        const { navigation } = this.props
        navigation.navigate('DeckList')
    }

    render() {
        const { deck, navigation, title } = this.props
        const cards = deck.cards
        const length = cards.length
        const { cardNumber, score } = this.state

        if (length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.quizQuestion}>There are no cards in the deck</Text>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('AddCard', {title: {title}})}>
                        <Text style={styles.btnText1}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if (cardNumber !== length) {
            return (
               <View key={cardNumber}>
                   <CardFlip ref={(card) => this.card = card}>
                        <TouchableOpacity style={styles.deck} onPress={() => this.card.flip()} >
                            <Text style={styles.deckTitle}>{deck.title} {cardNumber+1}/{length}</Text>
                            <Text style={styles.cardTitle}>Question</Text>
                            <Text style={styles.quizQuestion}>{cards[cardNumber].question}</Text>
                            <Text>(Tap card for answer)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deck} onPress={() => this.card.flip()} >
                            <Text style={styles.deckTitle}>{deck.title} {cardNumber+1}/{length}</Text>
                            <Text style={styles.cardTitle}>Answer</Text>
                            <Text style={styles.quizQuestion}>{cards[cardNumber].answer}</Text>
                            <View style={styles.inlineBtns}>
                                <TouchableOpacity style={styles.btn1}>
                                    <Entypo name="cross" size={28} color={codGrey} onPress={this.handleIncorrectClick}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn2} onPress={this.handleCorrectClick}>
                                <FontAwesome name="check" size={26} color={codGrey} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                   </CardFlip>
                </View>
            )
            
        }
        return (
            <View style={styles.container}>
                <View style={styles.quizComplete}>
                    <Text style={styles.quizQuestion}>You completed the quiz!</Text>
                    <Text style={styles.cardTitle}>You answered {score}/{length} questions correctly!</Text>
                    <TouchableOpacity style={styles.btn3} onPress={this.handleRestart}><Text style={styles.btn3Text}>Start Again</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn3} onPress={this.handleGoHome}><Text style={styles.btn3Text}>Go Home</Text></TouchableOpacity>
                </View>
            </View>
    )
    }
   
}


function mapStateToProps(state, {navigation}) {
    const deck = navigation.state.params.deck
    const title = navigation.state.params.deck.title
    return {
        deck,
        title
    }
}

export default connect(mapStateToProps)(Quiz)
