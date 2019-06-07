import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type:'ADD_POST', data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return(
            <div>
               <h1>Añade una tarea</h1>
               <form onSubmit={this.handleSubmit}>
                   <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Titulo tarea" /><br /><br />
                   <textarea ref={(input)=>this.getMessage = input} placeholder="Descripción tarea" /><br /><br />
                   <button>¡Añadir!</button>
               </form>
            </div>
        );
    }
}

export default connect()(PostForm);