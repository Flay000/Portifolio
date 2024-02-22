import React, { useState } from "react";
import List from './List';
import TodoForm from "./TodoForm";
import './Todo.css';

export default function Todo() {
    const [items, setItems] = useState([])

    function onAddItem(item) {
        setItems([...items, item])
        // aqui o setItems esta salvando o ITEM(PARAMETRO) dentro dos ITEM
        //e tambem esta criando um objeto por meio do OPERADOR SPREAD(...) e adicionando o
        // novo item ao final do objeto de ITEMS
    }

    return(
        <div className="container">
        <h1>Todo</h1>

        <TodoForm onAddItem={onAddItem}/>
       <List items={items}/>


        </div>

    )
}

    
