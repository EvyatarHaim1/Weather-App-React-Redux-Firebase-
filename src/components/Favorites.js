import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import City from './City';

export default function Favorites() {

    const forcast = useSelector((state) => state.city.forcast)

    return (
        <Div>
            <H1>Favorites</H1>
            <FavoritesCitiesContainer>
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
            </FavoritesCitiesContainer>

            {/* {forcast != [] && forcast?.map((favorite) => (
                <Favorite>
                    {favorite}
                </Favorite>
            ))} */}
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