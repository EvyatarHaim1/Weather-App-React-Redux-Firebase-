import React from 'react'
import styled from 'styled-components'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Searchbar from './Searchbar'

export default function Home() {
    return (
        <Div>
            <Searchbar />
            <CurrentWeather />
            <Forecast />
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
    justify-content:center;
    align-items:center;
`
