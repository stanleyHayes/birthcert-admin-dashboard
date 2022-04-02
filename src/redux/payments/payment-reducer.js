import PAYMENT_ACTION_TYPES from "./payment-action-types";

const INITIAL_STATE = {
    payments: [],
    paymentLoading: false,
    paymentError: null,
    totalPayments: 0
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PAYMENT_ACTION_TYPES.GET_PAYMENTS_REQUEST:
            return {
                ...state,
                paymentError: null,
                paymentLoading: true
            }

        case PAYMENT_ACTION_TYPES.GET_PAYMENTS_SUCCESS:
            return {
                ...state,
                paymentError: null,
                paymentLoading: false,
                payments: action.payload.payments,
                totalPayments: action.payload.count
            }

        case PAYMENT_ACTION_TYPES.GET_PAYMENTS_FAIL:
            return {
                ...state,
                paymentError: action.payload,
                paymentLoading: false,
            }

        case PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                paymentError: null,
                paymentLoading: true
            }

        case PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_SUCCESS:
            return {
                ...state,
                paymentError: null,
                paymentLoading: false,
                payments: action.payload.payments,
                totalPayments: action.payload.count
            }

        case PAYMENT_ACTION_TYPES.UPDATE_PAYMENT_FAIL:
            return {
                ...state,
                paymentError: action.payload,
                paymentLoading: false,
            }
        default:
            return state;
    }
}

export const selectPayment = state => state.payment;

export default paymentReducer;
