import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";



export default createStore(
    combineReducers({ math, user}),
    {},
    applyMiddleware(createLogger(),thunk,promise())
);