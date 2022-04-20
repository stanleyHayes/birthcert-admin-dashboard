import PAYMENT_ACTION_TYPES from "./payment-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const getPaymentsRequest = () => {
    return {
        type: PAYMENT_ACTION_TYPES.GET_PAYMENTS_REQUEST
    }
}

const getPaymentsSuccess= (payments, count) => {
    return {
        type: PAYMENT_ACTION_TYPES.GET_PAYMENTS_SUCCESS,
        payload: {payments, count}
    }
}

const getPaymentsFailure = message => {
    return {
        type: PAYMENT_ACTION_TYPES.GET_PAYMENTS_FAIL,
        payload: message
    }
}

const getPayments = token => {
    return async dispatch => {
        try {
            dispatch(getPaymentsRequest());
            const response = await axios({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                url: `${CONSTANTS.SERVER_BASE_URL}/payments/`,
            });
            const {data, count} = await response.data;
            dispatch(getPaymentsSuccess(data, count));
        }catch (e) {
            const {message} = e.response.data;
            dispatch(getPaymentsFailure(message));
        }
    }
}


const updatePaymentRequest = () => {
    return {
        type: PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_REQUEST
    }
}

const updatePaymentSuccess= (request) => {
    return {
        type: PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_SUCCESS,
        payload: request
    }
}

const updatePaymentFailure = message => {
    return {
        type: PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_FAIL,
        payload: message
    }
}

const updatePayment = (token, id, payment) => {
    return async dispatch => {
        try {
            dispatch(updatePaymentRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.SERVER_BASE_URL}/payments/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: payment
            });
            const {data} = response.data;
            dispatch(updatePaymentSuccess(data));
        }catch (e) {
            const {message} = e.response.error;
            dispatch(updatePaymentFailure(message));
        }
    }
}


export const PAYMENT_ACTION_CREATORS = {getPayments, updatePayment};
