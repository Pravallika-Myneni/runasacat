import Matter from 'matter-js'
import React from 'react'
import {View, Image} from 'react-native'

const Target = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.x - props.body.bounds.min.x

    const xBody = props.body.position.x - widthBody /2;
    const yBody = props.body.position.y - heightBody /2;

    return(
        <Image style={{
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody

        }}/>
    )

}

export default (world, pos, size) => {
    const inititialTarget = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      {label: 'Target',
       isStatic: true
    }
    )
    Matter.World.add(world, inititialTarget)

    return{
        body: inititialTarget,
        pos,
        renderer: <Target />
    }
}
