import React from "react";
import { CompC } from "./CompC";
import { CompD } from "./CompD";

export const CompB = (props) => {
    return <div>
        <h1>CompB</h1>
        <CompC />
        <CompD count={props.count} incrementCounter={props.incrementCounter} />
    </div>
}