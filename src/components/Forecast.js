import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ApiRequests from '../api/apiRequests';
import City from './City';

export default function Forecast() {

    const dispatch = useDispatch();
    const locationKey = useSelector((state) => state.city.locationKey);
    const headlineText = useSelector((state) => state.city.headlineText);
    const forecast = useSelector((state) => state.city.dailyForecast);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        getForecast()
    }, [locationKey])

    const getForecast = async () => {
        try {
            let res = await ApiRequests.getFiveDaysForecast(locationKey);
            dispatch({
                type: 'GET_FIVE_DAYS_FORECAST',
                payload: {
                    forecast: res.DailyForecasts,
                    headlineText: res.Headline.Category
                }
            })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Div>
            {headlineText}
            <H1>Five-day Forecast</H1>
            <ForecastContainer>
                {forecast?.map((day) => (
                    <City
                        key={day.Date}
                        dayNum={days[new Date(day.Date).getDay()]}
                        weatherStatus={day.Day.IconPhrase}
                        weatherC={day.Temperature.Maximum.Value} // convert to C
                        weatherF={day.Temperature.Maximum.Value}
                    />
                ))}
            </ForecastContainer>
        </Div>
    )
}

const Div = styled.div`
display: flex;
padding-left: 1%;
padding-right: 1%;
flex-direction: column;
text-align: center;
border-radius:20px;
border:1px solid lightgray;
width: 65%;
margin-top: 3%;
margin-bottom: 10%;
@media (max-width: 700px) {
    display: block;
  }
`
const ForecastContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10%;
@media (max-width: 700px) {
    display: grid;
    grid-template-areas: "x x "
                         "x x "
                         "x x ";
    padding-top: 3%;
  }
`
const H1 = styled.h1`
@media (max-width: 600px) {
    font-size: 20px;
  }

@media(max-width: 400px) {
    font-size: 15px;
}
@media(max-width: 300px) {
    font-size: 10px;
}
`