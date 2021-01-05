import React from 'react';
import { View, StyleSheet } from 'react-native';

import {Quiz} from '../components/Quiz'

export default class ScreenTwo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Quiz />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})