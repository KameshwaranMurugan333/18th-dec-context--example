import React from "react";
import { CompB } from "./CompB";

export const CompA = (props) => {

    const [count, setCount] = React.useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    return <div>
        <h1>CompA</h1>
        <CompB count={count} incrementCounter={incrementCounter}/>
    </div>
}