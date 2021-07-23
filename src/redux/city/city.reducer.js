import { UPDATE_CITY } from "./city.action";

const initialState = {
    city: 'tel aviv',
    locationKey: '215854',
    currentWeather: '',
    forcast: [],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload.city,
                locationKey: action.payload.key
            }
        default:
            return state;
    }
};