import React from 'react';
import ReactDOM from 'react-dom';

// class TodoForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.textInput = null;
//     }

//     render() {
//         return (
//             <form>
//                 <input 
//                     name="test" 
//                     ref={(input) => { this.textInput = input }} />
//                 <button type="submit" onClick={(e) => this.props.addTodo(e, ReactDOM.findDOMNode(this.textInput).value)}>dodaj nowy item</button>
//             </form>
//         )
//     }
// }

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            textInput: ''
        };
    }

    onChangeHandler(val) {
        this.setState({
            textInput: val
        });
    }

    addTodo(e) {
        e.preventDefault();
        this.props.addTodo(this.state.textInput);
        this.setState({textInput: ''});
    }

    render() {
        return (
            <form>
                <input 
                    name="test" 
                    value={this.state.textInput}
                    onChange={(e) => this.onChangeHandler(e.target.value)} />
                <button type="submit" onClick={(e) => this.addTodo(e)}>dodaj nowy item</button>
            </form>
        )
    }
}

export default TodoForm;