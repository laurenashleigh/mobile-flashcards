import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
import MainNavigator from './MainTabNavigator';

// export default createAppContainer(
//     createSwitchNavigator({
//         Main: BottomTabNavigator
//     })
// )

export default createAppContainer(MainNavigator)