import React from "react";

const States = (props) => {
    return (
    <>
        <h2 className="bg-success text-white">{props.name}</h2>
        <h4 className="bg-info">Language : {props.language}</h4>
        <h4 className="bg-info">Population : {props.population}</h4>
    </>
    )
}

export default States;