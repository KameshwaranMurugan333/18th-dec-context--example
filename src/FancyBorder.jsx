import React from "react";

export const FancyBorder = (props) => {
    return (
        <div style={{ border: '1px solid ' + props.color }}>
            {props.children} 
            <p>I am Fancy Border</p>
        </div>
    );
}