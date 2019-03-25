import React from "react";
import {Alert, Button, Text, View} from "react-native";
import {SafeAreaView} from "react-navigation";
import {styles} from "../CSS/mainStyles";

const tip = () => Alert.alert(
    "温馨提示",
    "23333",
    [
        {text:"确定"},
        {text:"取消"},
    ],
    { cancelable: false }
);
const mals=()=>{
    
}
class DetailPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Details',
        headerRight: (
            <Button title="233333"
                    onPress={tip}
            />
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