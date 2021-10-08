import { actionTypes } from "../constants/actionTypes";

const initialState = {
    movies: []
};
export const moviesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_MOVIES:
            return { ...state, movies: [...state.movies, payload] };
        case actionTypes.CLEAR_MOVIES:
            return { movies: [] };
        default:
            return state;
    }
};