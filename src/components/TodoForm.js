import React from 'react';

const TodoForm = (props) => (
        <form action="#">
            <input type="text" id="yes" name="test" />
            <button type="submit" onClick={(e) => props.addTodo(e, document.getElementById('yes').value)}>dodaj nowy item</button>
        </form>
    )

export default TodoForm;