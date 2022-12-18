import React from "react";
import { CompC } from "./CompC";
import { CompD } from "./CompD";
import { CountContext } from "./context";

export const CompB = (props) => {

    const countContext = React.useContext(CountContext)

    return <div>
        <h1>CompB</h1>
        <p>Count: {countContext.count}</p>
        <CompC />
        <CompD />
    </div>
}