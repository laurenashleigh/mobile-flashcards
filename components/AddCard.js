import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { blueLagoon, eggBlue, codGrey, black, white } from '../colours';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions/decks';
import { connect } from 'react-redux'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }
    handleAddQuestion = (question) => {
        this.setState({question})
    }

    handleAddAnswer = (answer) => {
        this.setState({answer})
    }

    handleSubmit = () => {
        const { addCard, title, navigation } = this.props
        const card = {
            question: this.state.question,
            answer: this.state.answer
        }
        if (this.state.question === '' || this.state.answer === '') {
            alert('Please complete both fields')
        } else {
            addCard(title, card)
            addCardToDeck(title.title, card)
            this.setState({
                question: '',
                answer: '',
            })
            navigation.navigate('DeckInfo', { deck: this.props.deck}) 
        }
        
        
    }


    render() {
        const { navigation, title } = this.props
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Create a card: </Text>
             <View>
                <TextInput style={styles.input} value={this.state.question} onChangeText={this.handleAddQuestion} placeholder='Question'/>
                <TextInput style={styles.input} value={this.state.answer} onChangeText={this.handleAddAnswer} placeholder='Answer'/>
            </View>
             <View>
                <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    btn: {
        backgroundColor: eggBlue,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        textShadowColor: '#00FFFF',
        borderColor: codGrey,
        borderWidth: 1,
      },
      btnText: {
          color: codGrey,
          fontSize: 20
      },
      input: {
          borderColor: codGrey,
          borderWidth: 1,
          padding: 10,
          marginBottom: 30,
          borderRadius: 2,
          paddingLeft:100,
          paddingRight: 100
      },
      title: {
          fontWeight: 'bold',
          marginBottom: 30,
          justifyContent: 'center',
          fontSize: 20
      },
      pageTitle: {
        fontSize: 30,
        color: blueLagoon,
        marginBottom: 30
      }
});

const mapStateToProps = (state, { navigation }) => {
    const title = navigation.state.params.title
    const deckName = title.title.split(' ').join('')
    const deck = state[deckName]
    return {
        navigation,
        title,
        deck
    }
}

export default connect(mapStateToProps, {addCard})(AddCard);
