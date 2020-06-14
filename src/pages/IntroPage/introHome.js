import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

export default props => {
    console.log("@@@@@@", props.userDetails, "^^^^^^^^")
    return (
        <View>
            <TouchableOpacity
            style={{ backgroundColor: 'blue'}}
            onPress={e => props.getUserDetails()}
            >
            <Text style={{color: 'white', padding: 10}} title="Get Started">{props?.userDetails?.name}</Text>
            </TouchableOpacity>
        </View>
    )
};
