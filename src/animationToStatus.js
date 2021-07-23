import sunny from './assets/images/sunny.gif';
import rainy from './assets/images/rainy.gif';
import snow from './assets/images/snow.gif';
import cloudy from './assets/images/cloudy.gif';

export const animationToStatus = (status) => {
    console.log(status)
    switch (status) {
        case 'sunny':
            return sunny;
        case 'rainy':
            return rainy;
        case 'snow':
            return snow;
        case 'cloudy':
            return cloudy;
        default:
            return;
    }
}