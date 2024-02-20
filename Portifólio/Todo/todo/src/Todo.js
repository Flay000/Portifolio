import React, { useState } from "react";
import List from './List';
import './Todo.css';

export default function Todo() {
    const [text, setText] = useState('')
    const [items, setItem] = useState([])


    function handleChange(event) {
        const textItems = event.target.value;
        setText(textItems)

    };
    
    function addItem(event) {
        event.preventDefault();
        if(text) {
            setItem([...items, text])
            setText('')
        }
    }
    return(
        <div className="container">
        <h1>Todo</h1>
        <form>
            <input placeholder="Adicione seu Item" onChange={handleChange}  type="text" value={text}></input>
            <button onClick={addItem}>ADD</button>
        </form>

       <List items={items}></List>


        </div>

    
    )
}