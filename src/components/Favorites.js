import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import City from './City';
import { db } from '../firebase';

export default function Favorites() {

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
                        weatherF={currentWeatherF}
                    />
                ))}
            </FavoritesCitiesContainer>

        </Div>
    )
}

const Div = styled.div`
width:70%;
margin-left: auto;
margin-right: auto;


`
const H1 = styled.h1`
text-align:center;
`
const FavoritesCitiesContainer = styled.div`
display: flex;
flex: 1 1 1;
flex-wrap: wrap;
flex-direction:row;
/* width:20%; */
justify-content:center;
align-items:center;
`