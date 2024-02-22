import React, { useState } from "react";


function TodoForm(props) {
    const [text, setText] = useState('')

    function handleChange(event) {
                const textItems = event.target.value;
                setText(textItems)
            };
            
    function addItem(event) {
                event.preventDefault();
                if(text) {
                    // setItem([...items, text])
                    props.onAddItem(text)
                    setText('')
                }
            }
    return(
        <form>
            <input placeholder="Adicione seu Item" onChange={handleChange}  type="text" value={text}></input>
            <button onClick={addItem}>ADD</button>
        </form>)
    }

export default TodoForm;