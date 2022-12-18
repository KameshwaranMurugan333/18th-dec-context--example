import React from "react";

export const FancyBorder = (props) => {
    return (
        <div style={{ border: '1px solid ' + props.color }}>
            {props.children}
        </div>
    );
}