import {userAction} from "redux/constants/user";

const initialState = {
    isAuth: false,
    data: {},
    isLoading: false,
};

function userReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case userAction.login:
            return {
                isAuth: true,
                isLoading: false,
                data: payload
            };
        case userAction.startLoading:
            return {
                isLoading: true
            };
        default:
            return state;
    }
}

export {userReducer}