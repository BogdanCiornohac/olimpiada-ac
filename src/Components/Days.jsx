import React from "react";
import '../App.css'

const Days = (props) =>
{
    return (
        <span className={props.isActive ? 'date active' : 'date'} onClick={() => props.dispatch({type: props.index})}>{props.day}</span>
    );
}

export default Days;