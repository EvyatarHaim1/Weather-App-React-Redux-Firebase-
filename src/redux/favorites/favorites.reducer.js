import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES, FETCH_ALL_FAVORITES } from "./favorites.action";

const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case DELETE_FROM_FAVORITES:
            return action.payload;
        default:
            return state;
    }
};