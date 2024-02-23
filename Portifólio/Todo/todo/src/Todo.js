import React, { useState } from "react";
import List from './List';
import Item from "./Item";
import TodoForm from "./TodoForm";
import './Todo.css';

export default function Todo() {
    const [items, setItems] = useState([])

    function onAddItem(text) {
        let item = new Item(text)
        setItems([...items, item])
        // aqui o setItems esta salvando o ITEM(PARAMETRO) dentro dos ITEM
        //e tambem esta criando um objeto por meio do OPERADOR SPREAD(...) e adicionando o
        // novo item ao final do objeto de ITEMS
    }
    function onItemDeleted(item) {
        //essa funcão pega o item por meio de PARAMETRO (item)apagado e tira ele da lista basead no ID dele e retorna e 
        // SALVA em items.
        let filteredItems = items.filter(it=>it.id !== item.id)

        setItems(filteredItems)
    }

    return(
        <div className="container">
        <h1>Todo</h1>

        <TodoForm onAddItem={onAddItem}/>
       <List onItemDeleted={onItemDeleted} items={items}/>


        </div>

    )
}

    
