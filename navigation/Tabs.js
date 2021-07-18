import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Leaderboard from '../screens/Leaderboard';
import Main from '../screens/Main';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            style: {
                position: 'absolute',
                elevation: 20,
                backgroundColor: "#053742"
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                margin: 15,
                padding: 0,
                color: "white"
              },
        }}
        >
        <Tab.Screen name="Board" component={Leaderboard} />
        <Tab.Screen name="Goals" component={Main} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default Tabs;