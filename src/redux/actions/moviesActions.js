import { actionTypes } from "../constants/actionTypes";

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        payload: movies
    };
};

export const clearMovies = () => {
    return {
        type: actionTypes.CLEAR_MOVIES,
    };
};