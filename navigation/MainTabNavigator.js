import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DeckList from '../components/DeckList';
import AddCard from '../components/AddCard';
import DeckInfo from '../components/DeckInfo';
import Quiz from '../components/Quiz';
import {doveGrey, dirtyGold} from '../colours';
import CreateDeck from '../components/CreateDeck';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tabs = createMaterialTopTabNavigator();
// const TabNavigator = () => (
//     <Tabs.Navigator
//         initialRouteName="DeckList"
//     >
//         <Tabs.Screen
//             name="DeckList"
//             component={DeckList}
//             options={{
//                 title: 'DeckList'
//             }}
//         />
//         <Tabs.Screen
//             name="AddDeck"
//             component={AddDeck}
//             options={{
//                 title: 'AddDeck'
//             }}
//         />
//     </Tabs.Navigator>
// )

// const Stack = createStackNavigator();
// const MainNavigator = () => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name="Home"
//             component={TabNavigator}
//         />
//         <Stack.Screen
//             name="DeckInfo"
//             component={DeckInfo}
//         />
//         <Stack.Screen
//             name="AddCard"
//             component={AddCard}
//         />
//         <Stack.Screen
//             name="Quiz"
//             component={Quiz}
//         />
//     </Stack.Navigator>
// )

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
                title: 'Deck Details'
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: 'Create a card'
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                title: 'Quiz'
            }
        },
        CreateDeck: {
            screen: CreateDeck,
            navigationOptions: {
                title: 'Create a deck'
            }
        }
    }
)

export default MainNavigator;