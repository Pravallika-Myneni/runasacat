import Matter from "matter-js";
import entities from "./entities";

const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine


    /**
     * setInitial state = calculation of position based off of % to goal.
     * create a function that moves avatar closer to target when new amount towards goal.
     * 
     * 
     */
   touches.filter(t => t.type === 'press')
   .forEach(t => {
       Matter.Body.setVelocity(entities.Avatar.body, {
           x: 2,
           y: 0
       })
   })

    Matter.Engine.update(engine, time.delata)

    const moveAvatar = () => {

        Matter.Body.translate(entities.Avatar.body,{
            x: 2,
            y:0 
         })

    }
   
    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({type: 'target reached'});
    })
    return entities;
}

export default Physics;