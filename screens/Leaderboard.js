import { View, Text, Button, StyleSheet } from "react-native";
import React from 'react';

const Leaderboard = ({navigation}) => {
    return (
        <View style ={styles.container}>
        <Text>Leaderboard Screen</Text>
        </View>
    )
};

export default Leaderboard;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})