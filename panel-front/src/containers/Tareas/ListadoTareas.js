import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tareas from './Tareas';
import EditComponente from './EditComponente';

class ListadoTareas extends Component {

    render() {
        return (
            <tbody>
                {this.props.posts.map((post) => (
                    <tr key={post.id}>
                        {post.editing ? <EditComponente post={post} key={post.id} column={post.column} /> :
                            <Tareas key={post.id} post={post} column={post.column} />}
                    </tr>
                ))}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(ListadoTareas);