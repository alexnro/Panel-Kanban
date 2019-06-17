import React, { Component } from 'react';
import { connect } from 'react-redux';

class Formulario extends Component {
    state = {
        value: '1'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false,
            column: this.state.value
        }
        this.props.dispatch({
            type: 'ADD_POST', data
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Inserte un título para la tarea<br />
                        <input required type="text" ref={(input) => this.getTitle = input} placeholder="Titulo tarea" />
                    </label><br /><br />
                    <label>
                        Inserte una descripción para la tarea<br />
                        <textarea ref={(input) => this.getMessage = input} placeholder="Descripción tarea" /><br /><br />
                    </label><br /><br />
                    <label>
                        Seleccione una columna donde añadirla<br />
                        <select onChange={(e) => this.setState({ ...this.state, value: e.target.value })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label><br /><br />
                    <button>Añadir</button>
                </form>
            </div>
        );
    }
}

export default connect()(Formulario);