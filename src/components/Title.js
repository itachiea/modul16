import React from 'react';
import TodoList from './TodoList';

const Title = props => 
    <div>
        <h1>{props.Title}</h1>
        <TodoList />
    </div>
    
export default Title;