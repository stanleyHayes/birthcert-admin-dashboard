import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import requestReducer from "./requests/request-reducer";
import paymentReducer from "./payments/payment-reducer";
import authReducer from "./authentication/auth-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    request: requestReducer,
    payment: paymentReducer,
    auth: authReducer,
    dashboard: dashboardReducer
});

export default rootReducer;
