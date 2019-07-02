import axios from 'axios';


const addPostRequest = data => {
    let task_id = data.id;
    let title = data.title;
    let message = data.message;
    let column = data.column;
    let queryParams = '?task_id=' + task_id + '&title=' + title + '&message=' + message + '&column=' + column;
    axios.post('/addTask' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

const deletePostRequest = post_id => {
    let queryParams = '?task_id=' + post_id;
    axios.post('/deleteTask' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

const updatePostRequest = data => {
    let task_id = data.id;
    let title = data.title;
    let message = data.message;
    let column = data.column;
    let queryParams = '?task_id=' + task_id + '&title=' + title + '&message=' + message + '&column=' + column;
    axios.post('/updateTask' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}


const Tareas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            addPostRequest(action.data);
            return state.concat([action.data]);
        case 'DELETE_POST':
            deletePostRequest(action.id);
            return state.filter((post) => {
                return post.id !== action.id
            });
        case 'EDIT_POST':
            return state.map((post) => {
                console.log(post)
                return post.id === action.id ? { ...post, editing: !post.editing } : post});
        case 'UPDATE':
            return state.map((post) => {
                console.log(post)
                if (post.id === action.id) {
                    let data = {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing,
                        column: action.data.newColumn
                    }
                    updatePostRequest(data);
                    return data;
                } else {
                    return post;
                }
            });
        case 'CANCEL_EDIT':
            return state.map((post) => {
                return {
                    ...post,
                    title: post.title,
                    message: post.message,
                    editing: !post.editing,
                    column: post.column
                }
            });
        default:
            return state;
    }
}

export default Tareas;