import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Animated, Image } from "react-native";
import React, { useState} from 'react';


//need to create avatarclass
//need to child avatar to ProgressBar
//may need to rethink the design. 
//zigzag progress bars? 
/**
 * if (avatar.position == posA.pos){
 *  move to towards next position
 * }
 */


const Main = ({navigation}) => {

    const[userName, setUserName] = useState("John Smith");
    const[badges, setBadges] = useState(null);
    const[milestone, setMilestone] = useState("1 Mos");
    const[goal, setGoals] = useState(null);

    const[coins, addCoins] = useState(100);
    const handleCoins = () => {
        
        //figure out point system.

    }

    // const [progress, setProgress] = useState(new Animated.Value(0));
    // const progressAnim = progress.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: ['0%','100%']
    // })
    const renderProgressBar = () => {
        return (
            <View styles={styles.container}>
            <Image source={require("../Images/avatar.png")} style={styles.imageAvatar}/>
           
                <View style={styles.progressBar}>
                
                    <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "white", width: "75%"}} />
                </View>
                <Text style={{fontWeight: 'bold', paddingTop: 10, marginLeft:"28%", fontSize: 16}}>Next Milestone: $8,000</Text>
                
            </View>
         
        )
    }

    return (<SafeAreaView>

            <View style = {{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', marginLeft:25, marginRight: 5}}>
            <Image source={require("../Images/coins.png")} style={styles.image}/>
            <Text  style ={styles.userTopTxtCoin}>{coins}</Text>
            </View>
            
            <Text style ={styles.userTopTxt}>{userName}</Text>
           
            <Image source={require("../Images/badgeimgs1.png")} style={styles.badgeImage}/>
            </View>

            
            
            <StatusBar/>

            <Text style={{fontSize: 22, fontWeight: "bold", marginTop: "15%", marginLeft: "8%"}}>Goal: Save $10,000 for College</Text>
            
            { renderProgressBar() }

            <Text style={{marginLeft:"50%", marginTop:"12%" }}>Next milestone aprox: {milestone}</Text>

         </SafeAreaView>

         
        
    )
};

export default Main;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
         alignItems:"center",
         width: '95%',
        // marginTop: '120%',
         padding: 5,
         marginLeft: 10,
         height: 30,
         borderRadius: 5,
         borderStyle:"solid",
         borderWidth: .5,
         borderColor: '#393E46',
         backgroundColor: "#9FE6A0"
        
    },
    image: {
        flex: 0,
        width: 30,
        height: 50,
        marginTop:15,
        resizeMode: 'contain'
     },
     imageAvatar: {
        flex: 0,
        width: 80,
        height: 150,
        marginTop:"75%",
        marginLeft: "60%",
        resizeMode: 'contain'
     },
     badgeImage: {
        flex: 0,
        width: 80,
        height: 60,
        marginTop:15,
        marginLeft:25,
        //marginRight:20,
        resizeMode: 'contain'
     },



})