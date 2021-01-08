import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { blueLagoon, eggBlue, codGrey, black, white } from '../colours';
import {addDeck} from '../actions/decks'
import {saveDeck} from '../utils/api'

class CreateDeck extends React.Component {
    state = {
        title: ''
    }

    handleTextInput = (value) => {
        this.setState({
            title: value
        })
    }
    handleSubmit = () => {
        const { title } = this.state
        const { addDeck, navigation } = this.props
        if (title === '') {
            alert('Please enter a title for your deck')
        } else {
            addDeck(title)
            saveDeck(title)
            this.setState({
                title: ''
            })
            navigation.goBack()  
        }
        

    }

    render() {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Name of Deck: </Text>
             <View>
                <TextInput style={styles.input} value={this.state.title} onChangeText={this.handleTextInput} placeholder='Enter name of deck'/>
            </View>
             <View>
                <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
                    <Text style={styles.btnText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    )}
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

export default connect(null, {addDeck})(CreateDeck);