import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
    const todos = props.data.map(todo => <Todo todo={todo} removeTodo={props.removeTodo} key={todo.id} />);
    
    return (
        <div>
            {todos}
        </div>
    )
}

export default TodoList;