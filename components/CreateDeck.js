import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { blueLagoon, eggBlue, codGrey, black, white } from '../colours';

const CreateDeck = () => {
    const [value, onChangeText] = React.useState('')
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Name of Deck: </Text>
             <View>
                <TextInput style={styles.input} value={value} onChangeText={text => onChangeText(text)} placeholder='Enter name of deck'/>
            </View>
             <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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

export default CreateDeck;