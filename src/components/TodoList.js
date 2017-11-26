import React from 'react';

const Todo = (props) => (
    <li>
        {props.todo.text} 
        <button onClick={() => props.removeTodo(props.todo.id)}>X</button>
    </li>
);

const TodoList = (props) => {
    const todos = props.data.map(todo => <Todo todo={todo} removeTodo={props.removeTodo} key={todo.id} />);
    
    return (
        <div>
            {todos}
        </div>
    )
}

export default TodoList;