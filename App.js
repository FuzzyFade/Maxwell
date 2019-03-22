import React from "react";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

import HomeScreen from './src/pages/Home';
import DetailPage from './src/pages/Detail'

const AppNavigator = createBottomTabNavigator({
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

// const TabNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     Detail: DetailPage,
// });
//
// export default createAppContainer(TabNavigator);