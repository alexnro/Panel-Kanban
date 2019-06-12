import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponente extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            id: new Date(),
            newTitle,
            newMessage,
        }
        this.props.dispatch({
            type:'UPDATE', id: this.props.post.id, data: data
        });
    }

    render() {
        return (
            <td>
               <form onSubmit={this.handleSubmit}>
                   <input required type="text" ref={(input)=>this.getTitle = input} defaultValue={this.props.post.title} placeholder="Titulo tarea" /><br /><br />
                   <textarea ref={(input)=>this.getMessage = input} defaultValue={this.props.post.message} placeholder="Descripción tarea" /><br /><br />
                   <button>Actualizar</button>
               </form>
            </td>
        );
    }
}

export default connect()(EditComponente);