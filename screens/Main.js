import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, StatusBar, Animated, Image, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';
import { GameEngine } from "react-native-game-engine";
import Physics from "../physics"
import Matter from "matter-js";
import entities from "../entities";



const Main = ({navigation}) => {

    const[userName, setUserName] = useState("John Smith");
    const[badges, setBadges] = useState(null);
    const[milestone, setMilestone] = useState("1 Mos");
    const[goal, setGoals] = useState(10000);
    const[totalSaved, setTotalSaved] = useState(2510)
    const[progress, setProgress]= useState(0)

    const[running, setRunning] = useState(true);
    useEffect(() => {
       return setProgress(progress => (totalSaved / goal) * 100, 5000)     
    }, [progress, totalSaved, goal])

    const[coins, addCoins] = useState(100);
    const handleCoins = () => {
        
        //add point sys
       
    }

    const renderProgress = () => {
        return (
            
            <View styles={styles.container}>
                <Image source={require("../Images/avatar.png")} style={styles.imageAvatar}/>
                <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width:`${progress}%`}}/>
                </View>
                <Text style={{fontWeight: 'bold', paddingTop: 0, marginLeft:"28%", fontSize: 18}}>Next Milestone: $8,000</Text>
                <Text style={{marginLeft:"20%"}}>Amazing! You've saved ${totalSaved}/${goal}</Text>
                <Text style={{marginLeft:"28%", color: "black"}}>Next milestone aprox: {milestone}</Text>  
            </View>
        )
    }

    const renderTesterInfo = () => {
    
            return (
            <SafeAreaView style={{flexDirection: 'row', alignItems:'center', marginLeft:"5%"}}>
                <Text style={styles.input}>Goal:$</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setGoals}
                  value={goal}
                  placeholder="e.g 100"
                 // keyboardType="numeric"
                />
                <Text style={styles.input}>Total Saved:$</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setTotalSaved}
                  value={totalSaved}
                  placeholder="e.g 100"
                 // keyboardType="numeric"
                />
              </SafeAreaView>  
            );
    }

    return (
        
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.imagebg}source={require("../Images/piggybankbg.png")}>
            <View style = {{flexDirection: 'row'}}>
                <View style = {{flexDirection: 'row', marginLeft:25, marginRight: 5, marginBottom:15}}>
                <Image source={require("../Images/coins.png")} style={styles.image}/>
                <Text  style ={styles.userTopTxtCoin}>{coins}</Text>
                </View>
                <Text style ={styles.userTopTxt}>{userName}</Text>
                <Image source={require("../Images/badgeimgs1.png")} style={styles.badgeImage}/>
            </View>

            <StatusBar/>

            <Text style={{fontSize: 22, fontWeight: "bold", color: "green", marginTop: "5%", marginLeft: "8%"}}>Goal: Save ${goal} for College</Text>
            { renderTesterInfo()}
            { renderProgress() }
     </ImageBackground>
    </SafeAreaView>   
   )
};

export default Main;
const styles = StyleSheet.create({

    container: {
       flex: 1,
       backgroundColor: '#F9F9F9'
    },
    userTopTxt: {
        fontWeight: 'bold',
        fontSize:20,
        padding: 25,
        marginRight: 10
    }, 
     userTopTxtCoin: {
        fontWeight: 'bold',
        fontSize:20,
        paddingTop:25,
        paddingRight:15,
        marginRight: 10
    },
    progressBar:{
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection:"row"
        
    },
    imagebg: {
        flex: 1,
        resizeMode: 'cover'

     },     
     image: {
        width: 30,
        height: 50,
        marginTop:15,
        resizeMode: 'contain'
     },
     imageAvatar: {
        flex: 0,
        width: 70,
        height: 110,
        marginTop:"95%",
        marginLeft: "75%",
        resizeMode: 'contain'
     },
     badgeImage: {
        flex: 0,
        width: 80,
        height: 60,
        marginTop:15,
        marginLeft:25,
        resizeMode: 'contain'
     },
     input:{
        fontWeight:"bold", 
        fontSize: 18,
        padding: 5, 
        alignSelf:"center"
     }
})




/**
            // <GameEngine 
            // systems={[Physics]}
            // entities={entities()}
            // running={running}
            // style={{position: 'absolute',top: 0, left:0, right:0,bottom:0}}>
            // </GameEngine>
            

            
            */