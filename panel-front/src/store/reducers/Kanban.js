import axios from 'axios';

const addKanban = data => {
    let _id = data._id;
    let name = data.name;
    let queryParams = '?_id=' + _id + '&name=' + name;
    axios.post('/addKanban' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
            console.log(queryParams);
        });
}

const deleteKanban = name => {
    let queryParams = '?name=' + name;
    console.log(name)
    axios.post('/deleteKanban' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

const Kanban = (state = [], action) => {
    switch (action.type) {
        case 'ADD_KANBAN':
            addKanban(action.data);
            return state === null ? state = [action.data] : state.concat([action.data]);
        case 'GET_KANBAN':
            state = action.kanbans
            return state !== undefined ? state : [];
        case 'DELETE_KANBAN':
            deleteKanban(action.name);
            return state.filter(kanbans => kanbans.name !== action.name);
        default:
            return state;
    }
}

export default Kanban;