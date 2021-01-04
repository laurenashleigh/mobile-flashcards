import React from 'react';
import AppNavigator from './navigation/AppNavigator'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/decks'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}
