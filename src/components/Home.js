import React from 'react'
import styled from 'styled-components'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Searchbar from './Searchbar'

export default function Home() {
    return (
        <Div>
            <Searchbar />
            <Content>
                <CurrentWeather />
            </Content>
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
    justify-content:center;
    align-items:center;
`
const Content = styled.div`
display: flex;
justify-content:center;
border: 2px solid lightgray;
padding: 2%;
margin-top: 4%;
width: 60%;
`