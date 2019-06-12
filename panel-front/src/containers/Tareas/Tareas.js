import React, {Component} from 'react';
import {connect} from 'react-redux';


class Tareas extends Component {
    render() {
        return(
            <td>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.message}</p>
                <button 
                    onClick={()=>this.props.dispatch({type:'EDIT_POST', id: this.props.post.id})}>
                        Editar</button>
                <button 
                    onClick={() => this.props.dispatch({type:'DELETE_POST', id: this.props.post.id})}>
                        Eliminar</button>
            </td>
        );
    }
}

export default connect()(Tareas);