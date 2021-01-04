import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { blueLagoon, eggBlue, codGrey, black, white } from '../colours';

export default AddCard = (props) => {
    const [value, onChangeText] = React.useState('')
    return (
        <View>
             <Text style={styles.pageTitle}>{props.name}</Text>
             <Text style={styles.title}>Create a card: </Text>
             <View>
                <TextInput style={styles.input} value={value} onChangeText={text => onChangeText(text)} placeholder='Question'/>
                <TextInput style={styles.input} value={value} onChangeText={text => onChangeText(text)} placeholder='Answer'/>
            </View>
             <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20, 
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
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