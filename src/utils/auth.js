import {local} from "./local";

const userToken = 'token'

const isLogin = () => {
    return !!local.getItem(userToken);
};

const getToken = () => {
    return local.getItem(userToken);
};

const setToken = (token) => {
    local.setItem(userToken, token);
};

const clearToken = () => {
    local.removeItem(userToken);
};

export {isLogin, getToken, setToken, clearToken};
