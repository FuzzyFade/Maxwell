import React from "react";
import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-navigation";
import {styles} from "../CSS/mainStyles";

class DetailPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Details',
        headerRight: (
            <Button title="233333" onPress={() => alert("sl")}/>
        ),
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text>底部</Text>
                    <Text>2333</Text>
                    <Text>底部</Text>
                    <Text>底部</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default DetailPage