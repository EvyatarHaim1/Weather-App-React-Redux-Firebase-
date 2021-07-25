import { GET_USER_LOCATION } from "./userLocation.action";

const initialState = {
    lat: "",
    long: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOCATION:
            return {
                ...state,
                lat: action.payload.lat,
                long: action.payload.long,
            }
        default:
            return state;
    }
};