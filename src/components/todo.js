import React from 'react';

const Todo = (props) => (
    <li>
        {props.todo.text} 
        <button onClick={() => props.removeTodo(props.todo.id)}>X</button>
    </li>
);

export default Todo;