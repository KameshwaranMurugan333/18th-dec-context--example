import React from "react";

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            switchStatus: "on"
        }
    }

    incrementCounter = () => {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount })
    }

    render() {
        return <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCounter}>Increment</button>
        </div>
    }
}

export default MyClassComponent;