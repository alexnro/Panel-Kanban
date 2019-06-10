import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <tbody>
                {this.props.posts.map((post) => (
                    <tr key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
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

export default connect(mapStateToProps)(AllPost);