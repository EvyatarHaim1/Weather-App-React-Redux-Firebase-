export const UPDATE_CITY = 'UPDATE_CITY';

export const updateCity = (city) => { return { type: UPDATE_CITY, payload: city.LocalizedName } }