import { wheater_app_key, wheater_app_key2, baseURL } from '../keys';

export default class ApiRequests {

    static async locationAutocomplete(city) {
        try {
            return fetch(`${baseURL}/locations/v1/cities/autocomplete?apikey=${wheater_app_key}+&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    return data;
                });
        } catch (error) {
            try {
                return fetch(`${baseURL}/locations/v1/cities/autocomplete?apikey=${wheater_app_key2}+&q=${city}`)
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    });
            } catch (error) {
                console.log(error)
            }
        }
    }

    static async getCurrentWeather(locationKey) {
        try {
            return fetch(`${baseURL}/currentconditions/v1/${locationKey}?apikey=${wheater_app_key}&language=en&details=true`)
                .then(response => response.json())
                .then(data => {
                    return data;
                });
        } catch (error) {
            try {
                return fetch(`${baseURL}/currentconditions/v1/${locationKey}?apikey=${wheater_app_key2}&language=en&details=true`)
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    });
            } catch (error) {
                console.log(error)
            }
        }
    }

    static async getFiveDaysForecast(locationKey) {
        try {
            return fetch(`${baseURL}/forecasts/v1/daily/5day/${locationKey}?apikey=${wheater_app_key}&language=en&details=true&metric=true%22`)
                .then(response => response.json())
                .then(data => {
                    return data;
                });
        } catch (error) {
            try {
                return fetch(`${baseURL}/forecasts/v1/daily/5day/${locationKey}?apikey=${wheater_app_key2}&language=en&details=true&metric=true%22`)
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    });
            } catch (error) {
                console.log(error)
            }
        }
    }
}
