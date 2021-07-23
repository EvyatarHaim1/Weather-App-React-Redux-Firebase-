export const UPDATE_CITY = 'UPDATE_CITY';
export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const GET_FIVE_DAYS_FORECAST = 'GET_FIVE_DAYS_FORECAST';



export const updateCity = (city) => { return { type: UPDATE_CITY, payload: city } }

export const getCurrentWeather = (currentWeather) => { return { type: GET_CURRENT_WEATHER, payload: currentWeather } }

export const getFiveDaysForecast = (forecast) => { return { type: GET_FIVE_DAYS_FORECAST, payload: forecast } }

