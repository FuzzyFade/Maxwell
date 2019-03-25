import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../pages/Home'
import DetailPage from '../pages/Detail'
import SchedulePage from '../pages/Schedule'

const HomeStack = createStackNavigator({
    Home:HomeScreen,
})

const DetailStack = createStackNavigator({
    Detail:DetailPage
})

const ScheduleStack = createStackNavigator({
    Schedule:SchedulePage
})

const RouteConfigs = {
    Home: {
        screen: HomeStack,
    },
    Detail: {
        screen: DetailStack,
    },
    Schedule: {
        screen: ScheduleStack,
    }
}

const BottomTabNavigatorConfig = {
    initialRouteName: "Home",
    tabBarOptions:{
        aactiveTintColor:'#2e2e2e'
    }
}

const TabNavigator = createBottomTabNavigator(RouteConfigs,BottomTabNavigatorConfig);
export default TabNavigator