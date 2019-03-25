import React from "react";
import {Button, Text, TextInput} from "react-native";
import {SafeAreaView} from "react-navigation";
import {styles} from "../CSS/mainStyles";

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: '今日',
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerRight: (
            <Button title="周课表" onPress={() => this.props.navigation.navigate('Schedule')}/>
        ),
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button
                    title="Detail"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </SafeAreaView>
        );
    }
}

export default HomeScreen