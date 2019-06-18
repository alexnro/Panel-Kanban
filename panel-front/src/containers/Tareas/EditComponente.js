import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from '../Panel/Panel';

class EditComponente extends Component {
    state= {
        value: '1'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newColumn = this.state.value;
        const data = {
            id: new Date(),
            newTitle,
            newMessage,
            newColumn
        }
        this.props.dispatch({
            type:'UPDATE', id: this.props.post.id, data: data
        });
    }

    render() {
        return (
            <td>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Inserte un título para la tarea<br/>
                        <input required type="text" ref={(input)=>this.getTitle = input} defaultValue={this.props.post.title} placeholder="Titulo tarea" /><br /><br />
                    </label><br /><br />
                    <label>
                        Inserte una descripción para la tarea<br/>
                        <textarea ref={(input)=>this.getMessage = input} defaultValue={this.props.post.message} placeholder="Descripción tarea" /><br /><br />
                    </label><br /><br />
                    <label>
                        Seleccione una columna donde cambiarla<br/>
                        <select onChange ={(e) => this.setState({...this.state, value: e.target.value})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label><br /><br />
                    <button onClick={Panel}>Actualizar</button>
                </form>
            </td>
        );
    }
}

export default connect()(EditComponente);