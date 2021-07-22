import React, { useEffect } from 'react'

export default function Forecast() {

    useEffect(() => {
        fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=GSrq3HIgtByeNTeB4urns6celqnohrsi&language=en&details=true&metric=true%22')
    }, [])
    return (
        <div>

        </div>
    )
}
