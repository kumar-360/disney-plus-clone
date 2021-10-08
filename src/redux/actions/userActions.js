import { actionTypes } from "../constants/actionTypes";

export const loginUser = (userInfo) => {
    return {
        type: actionTypes.SET_LOGIN,
        payload: userInfo
    };
};

export const logoutUser = () => {
    return {
        type: actionTypes.SET_LOGOUT,
    };
};