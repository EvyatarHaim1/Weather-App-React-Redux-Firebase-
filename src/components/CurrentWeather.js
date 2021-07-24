import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import emptyHeart from '../assets/images/emptyHeart.png';
import animHeart from '../assets/images/animHeart.gif';
import { animationToStatus } from '../animationToStatus';
import ApiRequests from '../api/apiRequests';
import { db } from '../firebase';
import firebase from 'firebase';

export default function CurrentWeather() {
    const [liked, setliked] = useState(false);
    const dispatch = useDispatch()
    const cityName = useSelector((state) => state.city.city);
    const currentWeatherC = useSelector((state) => state.city.current_Weather_Metric);
    const currentWeatherF = useSelector((state) => state.city.current_Weather_Imperial);
    const tempStatus = useSelector((state) => state.city.weatherStatus);
    const locationKey = useSelector((state) => state.city.locationKey);
    const allFavorites = useSelector((state) => state.favorites.favorites);

    useEffect(() => {
        getCurrentWeatherFromApi()
    }, [cityName]);

    const getCurrentWeatherFromApi = async () => {
        try {
            let res = await ApiRequests.getCurrentWeather(locationKey);
            dispatch({
                type: 'GET_CURRENT_WEATHER',
                payload: {
                    tempC: res[0].Temperature.Metric.Value,
                    tempF: res[0].Temperature.Imperial.Value,
                    weatherStatus: res[0].WeatherText
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addToFavorites = () => {
        setliked(!liked)
        db.collection('favorites').add({
            city: cityName,
            tempStatus: tempStatus,
            currentWeatherC: currentWeatherC,
            currentWeatherF: currentWeatherF,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        const newFavorite = {
            cityName: cityName,
            currentWeatherC: currentWeatherC,
            currentWeatherF: currentWeatherF,
            tempStatus: tempStatus,
        }
        dispatch({ type: 'ADD_TO_FAVORITES', payload: newFavorite })
    }

    const checkIfOnFavorites = () => {
        console.log(allFavorites)
    }

    return (
        <Div>
            <SectionL>
                <Img src={animationToStatus(tempStatus)} alt="animation" />
                <Content>
                    {cityName.toUpperCase()} <br />
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
width:20%;
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

