export const CONVERT_TO_FAHRENHEIT = 'CONVERT_TO_FAHRENHEIT';
export const SWITCH_TO_DARKMODE = 'SWITCH_TO_DARKMODE';

export const converTofahrenheit = (unit) => { return { type: CONVERT_TO_FAHRENHEIT, payload: unit } }

export const switchToDarkmode = (darkMode) => { return { type: SWITCH_TO_DARKMODE, payload: darkMode } }

