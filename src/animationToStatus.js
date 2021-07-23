import sunny from './assets/images/sunny.gif';
import rainy from './assets/images/rainy.gif';
import snow from './assets/images/snow.gif';
import cloudy from './assets/images/cloudy.gif';
import mostlySunny from './assets/images/mostly-sunny.gif';
import partlySunny from './assets/images/partly-sunny.gif';
import clear from './assets/images/clear.gif';
import overcast from './assets/images/overcast.gif';
import lightRain from './assets/images/light-rain.gif';
import sunAndClouds from './assets/images/sun-cloud.gif';
import mostlyCloudly from './assets/images/mostly-cloudly.gif';

export const animationToStatus = (status) => {
    console.log(status)
    switch (status) {
        case 'Sunny':
            return sunny;
        case 'Mostly sunny':
            return mostlySunny;
        case 'Partly sunny':
            return partlySunny;
        case 'Clear':
            return clear;
        case 'Overcast':
            return overcast;
        case 'Clouds and sun':
            return sunAndClouds;
        case 'Light rain':
            return lightRain;
        case 'Cloudy':
            return cloudy;
        case 'Mostly cloudy':
            return mostlyCloudly;
        case 'A shower':
            return rainy;
        case 'snow':
            return snow;
        default:
            return;
    }
}