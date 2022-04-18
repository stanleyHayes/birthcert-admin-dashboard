import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import requestReducer from "./requests/request-reducer";
import paymentReducer from "./payments/payment-reducer";
import adminReducer from "./admins/admin-reducer";
import authReducer from "./authentication/auth-reducer";
import birthCertificateReducer from "./birth-certificates/birth-certificate-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    request: requestReducer,
    payment: paymentReducer,
    admin: adminReducer,
    auth: authReducer,
    certificates: birthCertificateReducer
});

export default rootReducer;
