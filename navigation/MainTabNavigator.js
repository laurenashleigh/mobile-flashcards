import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DeckList from '../components/DeckList';
import AddCard from '../components/AddCard';
import DeckInfo from '../components/DeckInfo';
import {Quiz} from '../components/Quiz';
import {doveGrey, dirtyGold} from '../colours';




// const MainNavigator = () => {
//     const Stack = createStackNavigator()
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="DeckList"
//                 component={DeckList}
//                 // options={{title: "DeckList", headerTintColor: dirtyGold, headerStyle: {backgroundColor: doveGrey}}}
//             />
//             <Stack.Screen
//                 name="DeckInfo"
//                 component={DeckInfo}
//                 // options={{title: "Deck List", headerTintColor: dirtyGold, headerStyle: {backgroundColor: doveGrey}}}
//             />
//             <Stack.Screen
//                 name="AddCard"
//                 component={AddCard}
//                 // options={{title: "Add Card", headerTintColor: dirtyGold, headerStyle: {backgroundColor: doveGrey}}}
//             />
//             <Stack.Screen
//                 name="Quiz"
//                 component={Quiz}
//                 // options={{title: "Quiz", headerTintColor: dirtyGold, headerStyle: {backgroundColor: doveGrey}}}
//             />
//         </Stack.Navigator>
//     )
// }
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
            screen: Quiz
        }
    }
)

export default MainNavigator;