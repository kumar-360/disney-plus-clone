import { actionTypes } from "../constants/actionTypes";

const initialState = {
    name: '',
    email: '',
    photo: ''
};
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_LOGIN:
            return { name: payload.displayName, email: payload.email, photo: payload.photoURL };
        case actionTypes.SET_LOGOUT:
            return { name: '', email: '', photo: '' };
        default:
            return state;
    }
};