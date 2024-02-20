import React, { useState } from "react";
import './Todo.css';

export default function Todo() {
    const [item, setItem] = useState('')

    function handleChange(event) {
        event.preventDefault()
        const valueOne = event.target.value;
        setItem(valueOne)
    };
    return(
        <div className="container">
        <h1>Todo</h1>
        <form>
            <input onClick={handleChange}  type="text"></input>
            <button>ADD</button>
        </form>

        <ul>
            <li>{item}</li>
        </ul>


        </div>
    )
}