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
            <h1>Five-day Forecast</h1>
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
flex-direction: column;
text-align: center;
border-radius:20px;
border:1px solid lightgray;
width: 65%;
/* height:40%; */
/* @media (max-width: 768px) {
    flex-direction: column;
  } */
`
const ForecastContainer = styled.div`
display: flex;
flex-direction: row;
`