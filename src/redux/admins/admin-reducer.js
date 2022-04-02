const INITIAL_STATE = {
    admins: [],
    adminLoading: false,
    adminError: null
};

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export const selectAdmin = state => state.admin;

export default adminReducer;
