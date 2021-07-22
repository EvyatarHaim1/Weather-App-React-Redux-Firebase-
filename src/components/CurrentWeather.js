import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wheater_app_key, baseURL } from '../keys';

export default function CurrentWeather() {
    const dispatch = useDispatch()
    const cityName = useSelector((state) => state.city.city);
    const currentWeather = useSelector((state) => state.city.currentWeather)
    const locationKey = useSelector((state) => state.city.locationKey);

    useEffect(() => {
        try {
            fetch(`${baseURL}/currentconditions/v1/215854?apikey=${wheater_app_key}&language=en&details=true`)
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
        <div>
            {cityName}
            {currentWeather}
        </div>
    )
}
