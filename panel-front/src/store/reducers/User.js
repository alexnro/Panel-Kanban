const User = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.user;
        case 'UPDATE_USER':
            return {
                username: action.data.username,
                cargo: action.data.cargo
            };
        default:
            return state;
    }
}

export default User;