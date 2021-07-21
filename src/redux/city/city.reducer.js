import { UPDATE_CITY } from "./city.action";

const initialState = {
    city: 'tel aviv',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            return action.payload;
        default:
            return state;
    }
};