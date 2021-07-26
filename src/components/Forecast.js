import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ApiRequests from '../api/apiRequests';
import City from './City';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forecast() {

    const dispatch = useDispatch();
    const locationKey = useSelector((state) => state.city.locationKey);
    const headlineText = useSelector((state) => state.city.headlineText);
    const forecast = useSelector((state) => state.city.dailyForecast);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        getForecast()
    }, [locationKey])

    const notify = () => toast("Something went wrong with fetching five days forecast");

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
            notify()
            console.error(error)
        }
    }



    return (
        <Div>
            <ToastContainer />
            <H2>Five-day Forecast</H2>
            <P> {headlineText}</P>
            <ForecastContainer>
                {forecast?.map((day) => (
                    <City
                        key={day.Date}
                        dayNum={days[new Date(day.Date).getDay()]}
                        weatherStatus={day.Day.IconPhrase}
                        weatherC={day.Temperature.Maximum.Value}
                        weatherF={day.Temperature.Maximum.Value}
                    />
                ))}
            </ForecastContainer>
        </Div>
    )
}

const Div = styled.div`
padding-left: 1%;
padding-right: 1%;
text-align: center;
border-radius:20px;
border:1px solid lightgray;
width: 65%;
margin-top: 3%;
margin-bottom: 5%;
@media (max-width: 700px) {
    display: block;
  }
  @media (max-width: 960px) and (min-width: 700px){
height:120%;
padding-bottom: 5%;
  }
`
const ForecastContainer = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 960px) and (min-width: 700px){
padding-bottom: 5%;
}
`

const H2 = styled.h2`
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
const P = styled.p`
font-size:20px;
`