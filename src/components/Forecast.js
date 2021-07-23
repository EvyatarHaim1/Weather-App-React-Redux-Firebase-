import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ApiRequests from '../api/apiRequests';
import City from './City';

export default function Forecast() {

    const dispatch = useDispatch();
    const locationKey = useSelector((state) => state.city.locationKey);
    const headlineText = useSelector((state) => state.city.headlineText);
    const forecast = useSelector((state) => state.city.forecast);

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
            <h1>Five-day Forecast</h1>
            {forecast?.map((day) => (
                <City
                    dayNum={day.Day.Date}
                    weatherStatus={day.Day.Icon}
                    weatherC={day.Temperature.Maximum.Value}
                    weatherF={day.Temperature.Maximum.Value}
                />
            ))}
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: column;
text-align: center;
border-radius:20px;
border:1px solid lightgray;
width: 65%;
height:40%;
`
