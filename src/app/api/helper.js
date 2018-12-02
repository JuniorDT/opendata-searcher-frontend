import {UserApi} from "app/api/user";
import {BaseApi} from "./base";

function getApi(host) {
    //** Set host into BaseApi setter in api basic class
    //** After that all the inherit api classes will has a static host
    BaseApi.host = host;

    return {
        user: UserApi
    }
}

export {getApi}