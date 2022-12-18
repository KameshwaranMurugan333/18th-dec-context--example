import React from "react";
import { CountContext } from "./context";

export const CompF = (props) => {

    const countContext = React.useContext(CountContext);

    return <div>
        <h1>CompF</h1>
        <h2>Count: {countContext.count}</h2>
        <button onClick={countContext.incrementCounter} >Increment Counter</button>
    </div>
}