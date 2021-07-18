import Matter from 'matter-js'
import React from 'react'
import {View, Image} from 'react-native'

const Avatar = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.x - props.body.bounds.min.x

    const xBody = props.body.position.x - widthBody /2;
    const yBody = props.body.position.y - heightBody /2;

    return(
        <Image source={require("../Images/avatar.png")} style={{

            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody

        }}>
        </Image>
    )

}

export default (world, pos, size) => {
    const inititialAvatar = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      {label: 'Avatar'}
    )
    Matter.World.add(world, inititialAvatar)

    return{
        body: inititialAvatar,
        pos,
        renderer: <Avatar />
    }
}
