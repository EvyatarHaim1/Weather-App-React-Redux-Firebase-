import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./favorite.action";

const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return action.payload;
        case DELETE_FROM_FAVORITES:
            return action.payload;
        default:
            return state;
    }
};