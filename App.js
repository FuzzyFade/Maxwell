/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { createStackNavigator, createAppContainer,SafeAreaView } from "react-navigation";


class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {text:''}
    }
    static navigationOptions = {
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerRight: (
            <Button title="周课表" onPress={() => alert("nmd")}/>
        ),
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TextInput placeholder="请输入颜色" onChangeText={text => this.setState({text})}/>
                <Text>{this.state.text}</Text>
                <Button
                    title="我不是前端"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </SafeAreaView>
        );
    }
}

class DetailPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Details',
        headerRight: (
            <Button title="nmsl" onPress={() => alert("nmd")}/>
        ),
    };
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end'
            }}
            >
                <Text>底部</Text>
                <Text>底部</Text>
                <Text>底部</Text>
                <Text>底部</Text>
            </SafeAreaView>
        );
    }
}

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