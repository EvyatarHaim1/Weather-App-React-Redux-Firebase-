import React from 'react'
import styled from 'styled-components';
import { animationToStatus } from '../animationToStatus';

export default function City({ dayNum, weatherStatus, weatherC, weatherF, cityName }) {

    return (
        <Div>
            {cityName ? cityName : dayNum}
            <Img src={animationToStatus(weatherStatus)} alt="animation" />
            {weatherC}C° <br />
            {weatherStatus}
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
padding: 2%;
text-align: center;
justify-content:center;
align-items: center;
/* width:20%; */
height:30%;
border: 2px solid lightgray;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 33%;
:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}`


const Img = styled.img`
width:20%;
`
