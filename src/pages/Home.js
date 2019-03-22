import React from "react";
import {Button, Text, TextInput} from "react-native";
import {SafeAreaView} from "react-navigation";
import {styles} from "../CSS/mainStyles";

class HomeScreen extends React.Component {
    state = {
        text: "Home",
    };
    static navigationOptions = {
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerRight: (
            <Button title="hjjj" onPress={() => alert("nmd")}/>
        ),
    };
    render() {
        return (
            <SafeAreaView style={styles.bottom}>
                <TextInput placeholder="请输入颜色" onChangeText={text => this.setState({text})}/>
                <Text>{this.state.text}</Text>
                <Button
                    title="Detail"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </SafeAreaView>
        );
    }
}

export default HomeScreen