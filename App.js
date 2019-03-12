/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";

import HomeScreen from './src/pages/Home';
import DetailPage from './src/pages/Detail';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Detail: {
        screen: DetailPage,
    },
},{
    initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);