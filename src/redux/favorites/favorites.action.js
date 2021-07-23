export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';
export const FETCH_ALL_FAVORITES = 'FETCH_ALL_FAVORITES';




export const fetchAllFavorites = (favorites) => { return { type: FETCH_ALL_FAVORITES, payload: favorites } }

export const addToFavorites = (city) => { return { type: ADD_TO_FAVORITES, payload: city } }

export const deleteFromFavorites = (city) => { return { type: DELETE_FROM_FAVORITES, payload: city } }