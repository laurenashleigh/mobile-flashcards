import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/AddCard';
import DeckList from './components/DeckList';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import Decklist from './components/DeckList';

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Tabs = createBottomTabNavigator({
  Home: {
    screen: DeckList
  },
  AddDeck: {
    screen: AddDeck
  }
})

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen 
        name="Home"
        component={Decklist}
        options={{ tabBarLabel: 'Home'}}
      />
      <Tab.Screen 
        name="AddDeck"
        component={AddDeck}
        options={{ tabBarLabel: 'Add Deck'}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: 'Tab Stack' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
