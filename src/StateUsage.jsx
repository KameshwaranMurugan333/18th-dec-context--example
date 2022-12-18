import React from "react";

class StateUsage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Kamesh",
            users: [
                { id: 1, name: "Kamesh", role: "dev" },
                { id: 2, name: "Prasad", role: "dev" },
            ]
        }
    }

    incrementCounter = () => {
        // Wrong Method

        // this.state.count = this.state.count + 1;

        // this.setState({ count: this.state.count + 1 })

        // Correct Method
        this.setState((state, props) => {
            return { count: state.count + 1 }
        }, () => {
            console.log("I am updated the count.");
        });
    }

    updateKamesh = () => {
        this.setState((state, props) => {
            let newUser = state.users;
            newUser[0].name = "Kamesh Updated";
            return { users: newUser };
        }, () => {
            console.log("I am updated the users.");
        })
    }

    render() {
        return <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCounter}>Increment</button>

            {JSON.stringify(this.state.users)}
            <button onClick={this.updateKamesh}>Update Kamesh</button>
        </div>
    }
}

export default StateUsage;