import axios from 'axios';


const addPostRequest = data => {
    let task_id = data.id;
    let title = data.title;
    let message = data.message;
    let column = data.column;
    let kanban = data.kanban;
    let queryParams = '?task_id=' + task_id + '&title=' + title + '&message=' + message + '&column=' + column + '&kanban=' + kanban;
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
    console.log(post_id)
    axios.post('/deleteTask' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

const updatePostRequest = data => {
    console.log(data);
    let task_id = data._id;
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
        case 'GET_POSTS':
            state = action.tasks;
            return state;
        case 'ADD_POST':
            addPostRequest(action.data);
            return state === null ? state = [action.data] : state.concat([action.data]);
        case 'DELETE_POST':
            deletePostRequest(action.id);
            return state.splice(state.findIndex(x => x._id === action.id));
        case 'EDIT_POST':
            return state.map((post) => {
                console.log(post)
                return post._id === action.id ? { ...post, editing: !post.editing } : post});
        case 'UPDATE':
            console.log(action.id)
            return state.map((post) => {
                console.log(post._id)
                console.log(action.id)
                if (post._id === action.id) {
                    let data = {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: false,
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
                    editing: false,
                    column: post.column
                }
            });
        default:
            return state;
    }
}

export default Tareas;