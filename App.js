import React from 'react';
import AppNavigator from './navigation/AppNavigator'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/decks'
import { setLocalNotification } from './utils/notifications'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }
    
    render() {
       return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        ) 
    }
    
}
