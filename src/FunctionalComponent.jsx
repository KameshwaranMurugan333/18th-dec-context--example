import React from "react";

const MyFunctionalComponent = () => {

    const [state, setState] = React.useState({ count: 0, name: "kamesh" });

    const [arr, setArr] = React.useState([
        { id: 1, count: 0, name: "Kamesh" },
        { id: 2, count: 0, name: "Prasad" }
    ])

    const [_switch, setSwitch] = React.useState("on");

    const incrementCounter = () => {
        let newCount = state.count + 1;
        setState({ ...state, count: newCount });
    }

    const toogleSwitch = () => {
        let switchStatus = _switch === "on" ? "off" : "on";
        setSwitch(switchStatus);
    }

    const updateArrCounter = (index) => {
        let newArr = arr;
        newArr[index].count = newArr[index].count + 1;
        setArr([...newArr]);
    }

    return <div>
        <p>Count: {state.count}</p>
        <button onClick={incrementCounter}>Increment</button>

        <p>Switch: {_switch}</p>
        <button onClick={toogleSwitch}>ToogleSwitch</button>

        <p>Arr: {JSON.stringify(arr)}</p>
        <button onClick={(e) => updateArrCounter(0)}>Update Kamesh Counter</button>
        <button onClick={(e) => updateArrCounter(1)}>Update Prasad Counter</button>
    </div>
}

export default MyFunctionalComponent;