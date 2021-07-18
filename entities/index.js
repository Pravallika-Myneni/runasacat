import Matter from "matter-js";
import Avatar from "../components/avatar";
import Floor from "../components/floor";
import Target from "../components/target";

import { Dimensions } from "react-native";
import target from "../components/target";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false});
    let world = engine.world;
    //let gravity = world.Engine.gravity.y = 0.4;

    world.gravity.y = 0.4;

    return{
        physics: {engine, world},
        Avatar: Avatar(world, {x: 70, y:200}, {height:200, width: 70}),
        Target : Target(world, {x: 70, y:100}, {height:300, width: 100})
    }

}