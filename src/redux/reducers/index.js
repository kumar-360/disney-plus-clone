import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    allMovies: moviesReducer,
    user: userReducer
});

export default reducers;