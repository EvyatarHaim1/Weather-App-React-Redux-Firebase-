import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { wheater_app_key, baseURL } from '../keys';
import sunny from '../assets/images/sunny.gif'
import emptyHeart from '../assets/images/emptyHeart.png';
import animHeart from '../assets/images/animHeart.gif';
import { animationToStatus } from '../animationToStatus';

export default function CurrentWeather() {
    const [liked, setliked] = useState(false);
    const dispatch = useDispatch()
    const cityName = useSelector((state) => state.city.city);
    const currentWeatherC = useSelector((state) => state.city.current_Weather_Metric);
    const currentWeatherF = useSelector((state) => state.city.current_Weather_Imperial);
    const tempStatus = useSelector((state) => state.city.weatherStatus);
    const locationKey = useSelector((state) => state.city.locationKey);

    useEffect(() => {
        try {
            fetch(`${baseURL}/currentconditions/v1/${locationKey}?apikey=${wheater_app_key}&language=en&details=true`)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0].WeatherText);
                    dispatch({
                        type: 'GET_CURRENT_WEATHER',
                        payload: {
                            tempC: data[0].Temperature.Metric.Value,
                            tempF: data[0].Temperature.Imperial.Value,
                            weatherStatus: data[0].WeatherText
                        }
                    })
                });
        } catch (error) {
            console.log(error)
        }
    }, [cityName])

    const addToFavorites = () => {
        setliked(!liked)
        const newFavorite = {
            city: cityName,
            // status: statusAnim,
            currentWeatherC: currentWeatherC,
            // status: status,
        }
        dispatch({ type: 'ADD_TO_FAVORITES', payload: newFavorite })
    }

    return (
        <Div>
            <SectionL>
                <Img src={animationToStatus(tempStatus)} alt="animation" />
                <Content>
                    {cityName} <br />
                    {currentWeatherC} {''}C° <br />
                    {tempStatus}
                </Content>
            </SectionL>
            <HeartImg
                src={!liked ? emptyHeart : animHeart}
                onClick={() => addToFavorites()}
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
border-radius:20px;
width:90%;
text-align:center;
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
}`

const Content = styled.div`
display: flex;
flex-direction:column;
`

