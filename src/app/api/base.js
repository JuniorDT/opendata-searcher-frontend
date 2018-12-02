import {METHODS} from "app/constants/api";

class BaseApi {

    static request(path, {headers, body, method = METHODS.POST, cors}) {
        const requestOptions = {
            method,
            mode: cors ? 'cors' : 'same-origin',
            body,
        };
        const resultUrl = BaseApi.host + path;
        return fetch(resultUrl, requestOptions);
    }

    static set host(host) {
        BaseApi.__host = host;
    }

    static get host() {
        return BaseApi.__host;
    }
}

BaseApi.__host = null;

export {BaseApi}