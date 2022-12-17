import React from "react";

export const CompF = (props) => {
    return <div>
        <h1>CompF</h1>
        <h2>Count: {props.count}</h2>
        <button onClick={props.incrementCounter} >Increment Counter</button>
    </div>
}