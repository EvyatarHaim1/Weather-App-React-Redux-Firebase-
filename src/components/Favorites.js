import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

export default function Favorites() {

    const forcast = useSelector((state) => state.city.forcast)

    return (
        <div>
            <H1>Favorites</H1>
            {forcast != [] && forcast?.map((favorite) => (
                <Favorite>
                    {favorite}
                </Favorite>
            ))}
        </div>
    )
}

const H1 = styled.h1`
text-align:center;
`
const Favorite = styled.div`

`
