import React from 'react';

const TodoForm = (props) => (
        <form>
            <input type="text" id="kurwa" name="test" />
            <button type="submit" onClick={(e) => props.addTodo(document.getElementById('kurwa').value)}>dodaj nowy item</button>
        </form>
    )

export default TodoForm;