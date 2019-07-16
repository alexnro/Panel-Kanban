import axios from 'axios';

const addKanban = data => {
    let name = data.name
    let queryParams = '?name=' + name
    axios.post('/addKanban' + queryParams)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

const Kanban = (state = [], action) => {
    switch (action.type) {
        case 'ADD_KANBAN':
            addKanban(action.data);
            return state.concat([action.data]);
        case 'GET_KANBAN':
                state = action.kanbans
                return state;
        default:
            return state;
    }
}

export default Kanban;