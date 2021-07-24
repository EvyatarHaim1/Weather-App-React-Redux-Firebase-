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
const Content = styled.div`
justify-content:center;
text-align:center;
border: 2px solid lightgray;
border-radius: 20px;
padding-left: 2%;
padding-right: 2%;
padding-bottom: 1%;
margin-top: 4%;
width: 65%;
`