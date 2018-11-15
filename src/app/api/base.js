import {METHODS} from "app/constants/api";

class BaseApi {
    static request(url, {headers, body, method = METHODS.POST, cors}) {
        const requestOptions = {
            method,
            mode: cors ? 'cors' : 'same-origin',
            body,
        }
        return fetch(url)
    }
}

export {BaseApi}