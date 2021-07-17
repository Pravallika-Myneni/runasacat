import { View, Text, Button, StyleSheet } from "react-native";
import React from 'react';

const Settings = ({navigation}) => {
    return (
        <View style ={styles.container}>
        <Text>Settings Screen</Text>
        </View>
    )
};

export default Settings;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})