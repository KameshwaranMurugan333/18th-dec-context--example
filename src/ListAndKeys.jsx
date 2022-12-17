import React from "react";

export const ListAndKeys = () => {

    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 55, 6, 7, 8]);

    const users = [
        { id: 1, name: "Kameh", class: "React" },
        { id: 2, name: "Kameh", class: "React" },
        { id: 3, name: "Kameh", class: "React" },
        { id: 4, name: "Kameh", class: "React" },
        { id: 5, name: "Kameh", class: "React" }
    ]

    const appendNumArr = () => {
        setNumbers([...numbers, numbers.length + 1])
    }

    return <div>
        <h1>List and Keys</h1>

        {numbers.map((number, index) => {
            return <p key={number}>{number}</p>
        })}

        <button onClick={appendNumArr}>Append Numbers Array</button>

        {users.map((user, index) => {
            return <div style={{border:"1px solid black"}} key={user.id}>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Class: {user.class}</p>
            </div>
        })}
    </div>
}