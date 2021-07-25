export const GET_USER_LOCATION = 'GET_USER_LOCATION';

export const getUserLocation = (location) => { return { type: GET_USER_LOCATION, payload: location } }