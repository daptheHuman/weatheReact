import axios from 'axios';

const openWeatherAPI = process.env.REACT_APP_OPENWEATHER_API_KEY;

const getCurrentWeather = async (lat, lon) => {
  const response = await axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherAPI}&units=metric`,
  });
  const { main, weather } = response.data;
  const {
    temp,
    feels_like: feelsLike,
    temp_min: tempMin,
    temp_max: tempMax,
  } = main;
  const { description, icon } = weather[0];

  return { temp, feelsLike, tempMin, tempMax, description, icon };
};

export default getCurrentWeather;
