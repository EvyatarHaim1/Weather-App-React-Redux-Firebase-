import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { wheater_app_key, baseURL } from '../keys';
import sunny from '../assets/images/64906-sunny.gif'
import emptyHeart from '../assets/images/emptyHeart.png';

export default function CurrentWeather() {
    const dispatch = useDispatch()
    const cityName = useSelector((state) => state.city.city);
    const currentWeather = useSelector((state) => state.city.currentWeather)
    const locationKey = useSelector((state) => state.city.locationKey);

    useEffect(() => {
        try {
            fetch(`${baseURL}/currentconditions/v1/${locationKey}?apikey=${wheater_app_key}&language=en&details=true`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // dispatch({})
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <Div>
            <SectionL>
                <Img
                    src={sunny}
                    alt="sunny"
                />
                {cityName}
                {currentWeather}
            </SectionL>
            <div>
            </div>
            <HeartImg
                src={emptyHeart}
                alt="emptyHeart"
            />
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding-left: 3%;
padding-right: 3%;
border: 1px solid lightgray;
width:90%;
`

const SectionL = styled.div`
display: flex;

align-items: center;
`
const Img = styled.img`
width:10%;
margin-right: 3%;
`
const HeartImg = styled.img`
width:6%;
:hover{
    cursor:pointer;
}
`
