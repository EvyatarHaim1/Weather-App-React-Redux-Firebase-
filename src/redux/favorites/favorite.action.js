export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';

export const addToFavorite = (city) => { return { type: ADD_TO_FAVORITES, payload: city } }

export const deleteFromFavorite = (city) => { return { type: DELETE_FROM_FAVORITES, payload: city } }