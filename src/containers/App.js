import React from 'react';
import uuid from 'uuid';
import style from '../App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }],
            title: 'Todo list :)'
        };

        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(event, val){
        event.preventDefault(val);
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        console.log(id);
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} /> 
                <TodoForm addTodo={this.addTodo} />
                ({this.state.data.length})
                <TodoList data={this.state.data} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

export default App;