import ADMIN_ACTION_TYPES from "./admin-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const getAdminsRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_REQUEST
    }
}

const getAdminsSuccess= (admins, count) => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_SUCCESS,
        payload: {admins, count}
    }
}

const getAdminsFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_FAIL,
        payload: message
    }
}

const getAdmins = token => {
    return async dispatch => {
        try {
            dispatch(getAdminsRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/`,
            });
            const {data, count} = response.data;
            dispatch(getAdminsSuccess(data, count));
        }catch (e) {
            const {message} = e.response.data.error;
            dispatch(getAdminsFailure(message));
        }
    }
}


const getAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_REQUEST
    }
}

const getAdminSuccess= (admin) => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_SUCCESS,
        payload: admin
    }
}

const getAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_FAIL,
        payload: message
    }
}

const getAdmin = (token, id) => {
    return async dispatch => {
        try {
            dispatch(getAdminRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${id}`,
            });
            const {data} = response.data;
            dispatch(getAdminSuccess(data));
        }catch (e) {
            const {message} = e.response.data.error;
            dispatch(getAdminFailure(message));
        }
    }
}


const updateAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_REQUEST
    }
}

const updateAdminSuccess= (request) => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_SUCCESS,
        payload: request
    }
}

const updateAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_FAIL,
        payload: message
    }
}

const updateAdmin = (token, id, admin) => {
    return async dispatch => {
        try {
            dispatch(updateAdminRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: admin
            });
            const {data} = response.data;
            dispatch(updateAdminSuccess(data));
        }catch (e) {
            const {message} = e.response.data.error;
            dispatch(updateAdminFailure(message));
        }
    }
}


const createAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_REQUEST
    }
}

const createAdminSuccess= (request) => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_SUCCESS,
        payload: request
    }
}

const createAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_FAIL,
        payload: message
    }
}

const createAdmin = token => {
    return async dispatch => {
        try {
            dispatch(createAdminRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/payments/`,
            });
            const {data} = response.data;
            dispatch(createAdminSuccess(data));
        }catch (e) {
            const {message} = e.response.data.error;
            dispatch(createAdminFailure(message));
        }
    }
}


const blockAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.BLOCK_ADMIN_REQUEST
    }
}

const blockAdminSuccess= (request) => {
    return {
        type: ADMIN_ACTION_TYPES.BLOCK_ADMIN_SUCCESS,
        payload: request
    }
}

const blockAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.BLOCK_ADMIN_FAIL,
        payload: message
    }
}

const blockAdmin = (token, id, payment) => {
    return async dispatch => {
        try {
            dispatch(blockAdminRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/admins/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: payment
            });
            const {data} = response.data;
            dispatch(blockAdminSuccess(data));
        }catch (e) {
            const {message} = e.response.data.error;
            dispatch(blockAdminFailure(message));
        }
    }
}

export const ADMIN_ACTION_CREATORS = {createAdmin, blockAdmin, updateAdmin, getAdmin, getAdmins};
