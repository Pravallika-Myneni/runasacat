import { View, Text, Button, StyleSheet } from "react-native";
import React from 'react';

const Profile = ({navigation}) => {
    return (
        <View style ={styles.container}>
        <Text>Profile Screen</Text>
        </View>
    )
};

export default Profile;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }

})