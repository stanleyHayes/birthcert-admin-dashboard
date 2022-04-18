const INITIAL_STATE = {
    certificates: [],
    certificateLoading: false,
    certificateError: null
};

const birthCertificateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export const selectCertificate = state => state.certificates;

export default birthCertificateReducer;
