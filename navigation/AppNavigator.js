import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainTabNavigator';

export default createAppContainer(MainNavigator)