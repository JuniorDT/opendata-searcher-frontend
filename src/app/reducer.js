import {combineReducers} from 'redux'
import {userReducer} from "redux/reducers/user";

const reducer = combineReducers({
    user: userReducer
});

export {reducer};