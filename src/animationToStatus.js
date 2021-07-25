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
import partlyCloudly from './assets/images/partlyCloudly.gif';
import thunderstorm from './assets/images/thunderstorm.gif';
import stormshowersday from './assets/images/stormshowersday.gif';
import hazySunshine from './assets/images/hazySunshine.gif';
import IntermittentClouds from './assets/images/IntermittentClouds.gif';
import MostlyCloudyShowers from './assets/images/MostlyCloudyShowers.gif';
import Showers from './assets/images/Showers.gif';
import defaultGif from './assets/images/defaultGif.gif';

export const animationToStatus = (status) => {
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
        case 'Partly cloudy':
            return partlyCloudly;
        case 'Mostly cloudy':
            return mostlyCloudly;
        case 'A shower':
            return rainy;
        case 'snow':
            return snow;
        case 'Partly sunny w/ t-storms':
            return stormshowersday;
        case 'Thunderstorms':
            return thunderstorm;
        case 'Hazy sunshine':
            return hazySunshine;
        case 'Intermittent clouds':
            return IntermittentClouds;
        case 'Mostly cloudy w/ showers':
            return MostlyCloudyShowers;
        case 'Showers':
            return Showers;
        default:
            return defaultGif;
    }
}