import {userAction} from "redux/constants/user";

const actionLogin = (data) => ({
    type: userAction.login,
    data
});

function login() {
    return function (dispatch, _, {user}) {
        user.login();
    }
}


export {login}