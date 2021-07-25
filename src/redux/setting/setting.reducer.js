import { CONVERT_TO_FAHRENHEIT, SWITCH_TO_DARKMODE } from "./setting.action";

const initialState = {
    unit: false,
    darkmode: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONVERT_TO_FAHRENHEIT:
            return {
                ...state,
                unit: action.payload
            }
        case SWITCH_TO_DARKMODE:
            console.log(action.payload, state.darkmode)
            return {
                ...state,
                darkmode: action.payload
            }
        default:
            return state;
    }
};