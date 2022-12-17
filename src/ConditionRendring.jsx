import React from "react";

export const ConditionalRendering = (props) => {

    const [bulb, setBulb] = React.useState("off");

    const toggleBulb = () => {
        setBulb(bulb === "on" ? "off" : "on");
    }

    return <div>
        <h1>Conditional Rendering</h1>

        {/* Type 1: Using && (Logical AND) */}
        {bulb === "on" &&
            <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}>
            </div>
        }

        {bulb === "off" &&
            <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "white" }}>
            </div>
        }

        {/* Type 2: Using Ternary Operator */}
        {bulb === "on" ?
            <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}>
            </div> :
            <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "white" }}>
            </div>
        }

        <Bulb status={bulb} />

        <button onClick={toggleBulb} >Toggle Bulb</button>
    </div>
}

// Type 3: Using if statement to define which JSX element this Functional Component to return based on the condition.
const Bulb = ({ status = "off" }) => {
    if (status === "on") {
        return <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "red" }}>
        </div>
    } else {
        return <div style={{ border: "1px solid black", height: 100, width: 100, borderRadius: 50, backgroundColor: "white" }}>
        </div>
    }
}