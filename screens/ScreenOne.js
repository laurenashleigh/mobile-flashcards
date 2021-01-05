import React from 'react';
import { View, StyleSheet } from 'react-native';
import { white } from '../colours'
import DeckList from '../components/DeckList'

export default class ScreenOne extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <DeckList/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white, 
    }
})