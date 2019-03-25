import React from "react";
import {Button, Text} from "react-native";
import {SafeAreaView} from "react-navigation";
import {styles} from "../CSS/mainStyles";

class Schedule extends React.Component{
    static navigationOptions = {
        headerTitle: '周课表',
        headerStyle: {
            backgroundColor: '#fff'
        },
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>zhoukebiao</Text>
            </SafeAreaView>
        )
    }
}

export default Schedule