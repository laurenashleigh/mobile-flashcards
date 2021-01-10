import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DeckList from '../components/DeckList';
import AddCard from '../components/AddCard';
import DeckInfo from '../components/DeckInfo';
import Quiz from '../components/Quiz';
import {doveGrey, dirtyGold} from '../colours';
import CreateDeck from '../components/CreateDeck';


const MainNavigator = createStackNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                title: 'Deck List',
                headerTintColor: dirtyGold,
                headerStyle: {
                    backgroundColor: doveGrey
                }
            }
        },
        DeckInfo: {
            screen: DeckInfo,
            navigationOptions: {
                title: 'Deck Details',
                headerTintColor: dirtyGold,
                headerStyle: {
                    backgroundColor: doveGrey
                }
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: 'Create a card',
                headerTintColor: dirtyGold,
                headerStyle: {
                    backgroundColor: doveGrey
                }
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                title: 'Quiz',
                headerTintColor: dirtyGold,
                headerStyle: {
                    backgroundColor: doveGrey
                }
            }
        },
        CreateDeck: {
            screen: CreateDeck,
            navigationOptions: {
                title: 'Create a deck',
                headerTintColor: dirtyGold,
                headerStyle: {
                    backgroundColor: doveGrey
                }
            }
        }
    }
)

export default MainNavigator;