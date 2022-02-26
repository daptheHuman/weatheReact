import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Searchbar from '../components/Searchbar';
import Object from '../components/Object';
import getCurrentWeather from '../services/weather';

const Temp = ({ temp }) => {
  return <span>{temp.toFixed(0)}ºC</span>;
};

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useSearchParams();

  // get lon lat from search params and making as a single object
  const { lat, lon, location } = {
    lat: search.get('lat') || 0,
    lon: search.get('lon') || 0,
    location: search.get('location') || '',
  };

  // get weather from api
  useEffect(() => {
    getCurrentWeather(lat, lon).then((currentWeather) => {
      setWeather(currentWeather);
    });
  }, [lat, lon]);

  console.log(weather);
  const { temp, tempMin, tempMax, description, icon } = weather || {};

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Navbar />
      <Searchbar />

      <div className="z-10 flex flex-col items-center justify-center gap-32 px-12 pt-4 pb-20 md:px-44">
        <div className="glassmorph h-80 w-full ">
          <Map lat={lat} lon={lon} />
        </div>

        {weather && (
          <div className="glassmorph flex flex-col justify-between rounded-xl px-12 py-12 md:flex-row-reverse md:px-20">
            <div className="-translate-y-32 md:w-1/3">
              <Object icon={icon} />
              <span className="text-4xl font-bold uppercase text-white">
                {description}
              </span>
            </div>

            <div className="flex flex-col items-start justify-between md:w-1/2">
              <span className="text-4xl font-normal text-white">
                {location}
              </span>
              <p className="text-7xl font-bold text-white">
                <Temp temp={temp} />
              </p>
              <p className="text-4xl text-white">
                Max: <Temp temp={tempMax} />
                <br />
                Min: <Temp temp={tempMin} />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Temp.propTypes = {
  temp: propTypes.number.isRequired,
};

export default Weather;
