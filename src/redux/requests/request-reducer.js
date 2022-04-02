import REQUEST_ACTION_TYPES from "../requests/request-action-types";

const INITIAL_STATE = {
    requests: [],
    requestLoading: false,
    requestError: null,
    totalRequests: 0,
    requestDetail: {}
};

const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case REQUEST_ACTION_TYPES.GET_REQUESTS_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUEST_ACTION_TYPES.GET_REQUESTS_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requests: action.payload.requests,
                totalRequests: action.payload.count
            }

        case REQUEST_ACTION_TYPES.GET_REQUESTS_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false,
            }

        case REQUEST_ACTION_TYPES.GET_REQUEST_REQUEST:
            return {
                ...state,
                requestError: null,
                requestLoading: true
            }

        case REQUEST_ACTION_TYPES.GET_REQUEST_SUCCESS:
            return {
                ...state,
                requestError: null,
                requestLoading: false,
                requestDetail: action.payload
            }

        case REQUEST_ACTION_TYPES.GET_REQUEST_FAIL:
            return {
                ...state,
                requestError: action.payload,
                requestLoading: false,
            }
        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;
