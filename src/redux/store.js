import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import {CONSTANTS} from "../utils/constants/constants";

const token = localStorage.getItem(CONSTANTS.BIRTH_REGISTRY_ADMIN_TOKEN_KEY) ?
    localStorage.getItem(CONSTANTS.BIRTH_REGISTRY_ADMIN_TOKEN_KEY): null;

const authData = localStorage.getItem(CONSTANTS.BIRTH_REGISTRY_ADMIN_AUTH_KEY) ?
    JSON.parse(localStorage.getItem(CONSTANTS.BIRTH_REGISTRY_ADMIN_AUTH_KEY)): null;

const INITIAL_STATE = {
    auth: {
        token,
        authData
    }
};

const store = createStore(rootReducer,INITIAL_STATE, applyMiddleware(thunk));

export default store;
