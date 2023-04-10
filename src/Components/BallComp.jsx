import React from "react"
import './ball.css'

const BallComp = (props) => {

    return (
        <img src={props.ballType} style={{ height: '110px',animationDuration:`${props.time}` }} className='ball-img' alt='ball'/>
    );
}

export default BallComp