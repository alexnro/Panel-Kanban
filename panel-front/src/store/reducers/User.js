const User = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            console.log(action.user)
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