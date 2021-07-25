import { CONVERT_TO_FAHRENHEIT, SWITCH_TO_DARKMODE } from "./setting.action";

const initialState = {
    unit: false,
    darkmode: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONVERT_TO_FAHRENHEIT:
            console.log(action.payload)
            return {
                ...state,
                unit: action.payload
            }
        case SWITCH_TO_DARKMODE:
            return {
                ...state,
                darkMode: action.payload
            }
        default:
            return state;
    }
};