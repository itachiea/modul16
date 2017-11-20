import React from 'react';

const TodoList = (props) =>
    <div>
        <button onClick={() => props.removeTodo(props.todo.id)}>{props.data[0].text}</button>
        <div onClick = {() => props.removeTodo()}>{props.data[0].text}</div>
        {props.data[1].text}
        {props.data[2].text}
    </div>



export default TodoList;