import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { codGrey, dirtyGold, blueLagoon, white, doveGrey } from '../colours';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import {connect} from 'react-redux'

const styles = StyleSheet.create({
    deck: {
        borderWidth: 2,
        borderColor: dirtyGold,
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        width: 300,
        borderRadius: 2,
        marginBottom: 50,
        marginTop: 30,
        padding: 50,
        backgroundColor: doveGrey,
    },
    cardTitle: {
        fontSize: 18,
        color: codGrey,
        marginBottom: 10,
    },
    deckTitle: {
        fontSize: 14,
        color: codGrey,
        alignItems: 'flex-start',
        marginBottom: 20,
        justifyContent: 'flex-start',
    },
    quizQuestion: {
        fontSize: 34,
        color: blueLagoon,
        marginBottom: 40,
        marginBottom: 40,
        padding: 50,
        fontWeight: 'bold'
    },
    quizAnswer: {
        fontSize: 34,
        color: dirtyGold,
        marginBottom: 40,
        marginBottom: 40,
        padding: 50,
        fontWeight: 'bold'
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
        marginRight: 5,
    },
    btn2: {
        backgroundColor: dirtyGold,
        borderWidth: 1,
        borderColor: blueLagoon,
        borderRadius: 3,
        marginBottom: 20,
        marginLeft: 5,
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
        justifyContent: 'center'
    },
    quizComplete: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
})
class Quiz extends React.Component {
    state = {
        hasClicked: false,
        cardNumber: 0,
        score: 0,
    }

    handleRestart = () => {
        this.setState({
            hasClicked: false,
            cardNumber: 0,
            score: 0,
        })
        //navigate to home
    }

    handleClick = () => {
        this.setState(prevState => ({
            hasClicked: !prevState.hasClicked,
        }))
    }

    handleCorrectClick = () => {
        this.setState(prevState => ({
            score: prevState.score + 1,
            cardNumber: prevState.cardNumber +1,
            hasClicked: !prevState.hasClicked
        }))
    }

    handleIncorrectClick = () => {
        this.setState(prevState => ({
            cardNumber: prevState.cardNumber + 1,
            hasClicked: !prevState.hasClicked
        }))
    }

    render() {
        const { deck, navigation, title } = this.props
        const cards = deck.cards
        const length = cards.length
        const { cardNumber, score, hasClicked} = this.state

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
               <View style={styles.container} key={cardNumber}>
                <TouchableOpacity style={styles.deck} onPress={this.handleClick}>
                    <Text style={styles.deckTitle}>{deck.title} {cardNumber+1}/{length}</Text>
                    <Text style={styles.cardTitle}>{!hasClicked ? 'Question' : 'Answer'}</Text>
                    {!hasClicked ? <Text style={styles.quizQuestion}>{cards[cardNumber].question}</Text> : <Text style={styles.quizAnswer}>{cards[cardNumber].answer}</Text>}
                    {hasClicked ?
                    (<View style={styles.inlineBtns}>
                        <TouchableOpacity style={styles.btn1}>
                            <Entypo name="cross" size={28} color={codGrey} onPress={this.handleIncorrectClick}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2} onPress={this.handleCorrectClick}>
                        <FontAwesome name="check" size={26} color={codGrey} />
                        </TouchableOpacity>
                    </View>) :
                    <Text>(Tap card for answer)</Text>
                    }
                </TouchableOpacity>
                
                <Text style={styles.btn3Text}>Score: {score}</Text>
                <TouchableOpacity style={styles.btn3} onPress={this.handleRestart}><Text style={styles.btn3Text}>Start Again</Text></TouchableOpacity>
             </View> 
            )
            
        }
        return (
            <View style={styles.container}>
                <View style={styles.quizComplete}>
                    <Text style={styles.quizQuestion}>You completed the quiz!</Text>
                    <Text style={styles.cardTitle}>You answered {score}/{length} questions correctly!</Text>
                    <TouchableOpacity style={styles.btn3} onPress={this.handleRestart}><Text style={styles.btn3Text}>Start Again</Text></TouchableOpacity>
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
