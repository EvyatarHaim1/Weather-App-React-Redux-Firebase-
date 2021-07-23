export const UPDATE_CITY = 'UPDATE_CITY';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';



export const updateCity = (city) => { return { type: UPDATE_CITY, payload: city } }

export const getCurrentWeather = (currentWeather) => { return { type: GET_CURRENT_WEATHER, payload: currentWeather } }
