const INITIAL_STATE = {
    users: [],
    userLoading: false,
    userError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export const selectUser = state => state.user;

export default userReducer;
