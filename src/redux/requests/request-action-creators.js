import REQUEST_ACTION_TYPES from "./request-action-types";

import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const getRequestsRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUESTS_REQUEST
    }
}

const getRequestsSuccess= (requests, count) => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUESTS_SUCCESS,
        payload: {requests, count}
    }
}

const getRequestsFailure = message => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUESTS_FAIL,
        payload: message
    }
}

const getRequests = token => {
    return async dispatch => {
        try {
            dispatch(getRequestsRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/`,
            });
            const {data, totalRequests} = await response.data;
            dispatch(getRequestsSuccess(data, totalRequests));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(getRequestsFailure(message));
        }
    }
}


const updateRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.UPDATE_REQUEST_REQUEST
    }
}

const updateRequestSuccess= (request) => {
    return {
        type: REQUEST_ACTION_TYPES.UPDATE_REQUEST_SUCCESS,
        payload: request
    }
}

const updateRequestFailure = message => {
    return {
        type: REQUEST_ACTION_TYPES.UPDATE_REQUEST_FAIL,
        payload: message
    }
}

const updateRequest = (token, id, request) => {
    return async dispatch => {
        try {
            dispatch(updateRequestRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: request
            });
            const {data} = response.data;
            dispatch(updateRequestSuccess(data));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(updateRequestFailure(message));
        }
    }
}


const getRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUEST_SUCCESS
    }
}

const getRequestSuccess= (request) => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUEST_SUCCESS,
        payload: request
    }
}

const getRequestFailure = message => {
    return {
        type: REQUEST_ACTION_TYPES.GET_REQUEST_FAIL,
        payload: message
    }
}

const getRequest = (token, ID) => {
    return async dispatch => {
        try {
            dispatch(getRequestRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/requests/${ID}`,
            });
            const {data} = response.data;
            dispatch(getRequestSuccess(data));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(getRequestFailure(message));
        }
    }
}


export const REQUEST_ACTION_CREATORS = {getRequests, updateRequest, getRequest};
