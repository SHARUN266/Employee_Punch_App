import {combineReducers,legacy_createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer/reducer";

const rootReducers=combineReducers({reducer})
const store=legacy_createStore(rootReducers,applyMiddleware(thunk));
export default store