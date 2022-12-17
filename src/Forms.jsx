import React from "react";

export const Forms = (props) => {

    const [state, setState] = React.useState({
        name: "",
        type: "",
        comment: ""
    });

    const updateName = (e) => {
        setState({ ...state, name: e.target.value });
    }

    const updateType = (e) => {
        setState({ ...state, type: e.target.value });
    }

    const updateComment = (e) => {
        setState({ ...state, comment: e.target.value });
    }

    return <form>

        <h1>Feedback Form</h1>

        {/* Name */}
        <div>
            <label>Name: </label>
            <input type={"text"} placeholder={"Enter your name"} value={state.name} onChange={updateName} />
        </div>

        {/* Type */}
        <div>
            <label>Type: </label>
            <select value={state.type} placeholder={"Select Type"} onChange={updateType}>
                <option value={"general"}>General</option>
                <option value={"bike"}>Bike</option>
                <option value={"car"}>Car</option>
            </select>
        </div>

        {/* Comment */}
        <div>
            <label>Comment: </label>
            <textarea value={state.comment} onChange={updateComment} placeholder={"Please Enter your comment"}/>
        </div>
    </form>
}