import { UPDATE_CITY } from "./city.action";

const initialState = {
    city: 'tel aviv',
    locationKey: '215854',
    forcast: [],
    currentWeather: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CITY':
            console.log('from redux', action.payload)
        // return action.payload;
        case 'CURRENT_WEATHER':
            return action.payload;
        default:
            return state;
    }
};