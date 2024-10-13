
import axios from "axios";

const apiKey = 'edd457f250bc1ba572d39ef53dfdaf2b'; // Your Weatherstack API key
const location = 'Coimbatore';

export const fetchWeatherData = async () => {
    try {
        let res = await axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`);
        return res.data;

    } catch (err) {
        console.error("Error fetching weather data:", err);
        return null;
    }
}

