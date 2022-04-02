import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import requestReducer from "./requests/request-reducer";
import paymentReducer from "./payments/payment-reducer";
import adminReducer from "./admins/admin-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    request: requestReducer,
    payment: paymentReducer,
    admin: adminReducer
});

export default rootReducer;
