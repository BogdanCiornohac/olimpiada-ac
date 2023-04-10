import React from "react";
import "./count.css"

const TimeUnit = (props) => {
    return <div className="unit">
        <span className="unit-type">{props.unit}</span>
        <span className="unit-value">{props.value}</span>
    </div>
}

export default TimeUnit;