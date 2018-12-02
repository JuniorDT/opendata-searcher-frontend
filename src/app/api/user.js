import {BaseApi} from "app/api/base";

//** Syntax sugar for using static methods and data
//** self.host - getter and setter hosts;
console.log(self);

class UserApi extends BaseApi {
    //self = UserApi;
    static login() {
        console.log('in class');
        console.log(self);
    }
}
const self = UserApi;


export {UserApi}