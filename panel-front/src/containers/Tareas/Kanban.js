import React, {Component} from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class Kanban extends Component {
    render() {
        return(
            <div className='Kanban'>
                <PostForm />
                <AllPost />
            </div>
        );
    }
}

export default Kanban;