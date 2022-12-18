import React from "react";

class LifeCycleMethod extends React.Component {
    // Mounting
    constructor(props) {
        super(props);
        this.state = { favoritecolor: this.props.favcol };
    }

    // Mounting
    componentDidMount() {
        console.log("Component Did Mount")
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 5000)
    }

    // Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState:', nextState)
        console.log('nextProps:', nextProps)
        if(nextState.favoritecolor === "blue"){
            return true;
        }
        return false;
    }

    // Mounting & Updating
    static getDerivedStateFromProps(props, state) {
        console.log("Get Derived State From Props");
        return null;
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        return {favoritecolor:"black"};
    }

    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('snapshot:', snapshot)
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }

    // Unmountint
    componentWillUnmount() {
        console.log("I am un mount.")
    }

    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }

    // Mounting & Updating
    render() {
        console.log("I am Render")
        return <div>
            <h1>Life Cycle Methods</h1>
            <h3>My Favorite Color is {this.state.favoritecolor}</h3>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
    }

}

export default LifeCycleMethod;