import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import cityReducer from "./city/city.reducer";

const reducers = combineReducers({
    city: cityReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

const createstorewithmiddleware = createStore(
    rootReducer,
    applyMiddleware(reduxThunk)
);
export default createstorewithmiddleware;
