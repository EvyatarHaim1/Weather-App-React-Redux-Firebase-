import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import City from './City';
import { db } from '../firebase';

export default function Favorites() {

    const dispatch = useDispatch();
    const [allFavorites, setallFavorites,] = useState([])

    useEffect(() => {
        db.collection('favorites')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setallFavorites(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })
                    )))
        dispatch({ type: 'FETCH_ALL_FAVORITES', payload: allFavorites });
    }, [])

    return (
        <Div>
            <H1>Favorites</H1>
            <FavoritesCitiesContainer>
                {allFavorites.map(({ id, data: { city, tempStatus, currentWeatherC, currentWeatherF } }) => (
                    <City
                        id={id}
                        key={id}
                        cityName={city}
                        weatherStatus={tempStatus}
                        weatherC={currentWeatherC}
                    />
                ))}
            </FavoritesCitiesContainer>
        </Div>
    )
}

const Div = styled.div`
width:100%;
margin-left: auto;
margin-right: auto;

`
const H1 = styled.h1`
text-align:center;
`
const FavoritesCitiesContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction:row;
justify-content:center;
align-items:center;

@media (max-width: 480px){
    flex-direction: column;
}
@media (max-width: 700px){
    width:60%;
    margin-left: auto;
margin-right: auto;
}
`