import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { m } from 'framer-motion';
import { parentAnim, childAnim } from '../utils/anim';
import Temp from '../utils/temp';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Searchbar from '../components/Searchbar';
import WeatherIcon from '../components/WeatherIcon';
import getCurrentWeather from '../services/weather';
import Loading from '../components/Loading';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useSearchParams();
  const { temp, tempMin, tempMax, description, icon } = weather || {};

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

    setTimeout(setLoading(false), 2000);
  }, [lat, lon]);

  // Framer Motion Custom Component
  const MotionWeatherIcon = m(WeatherIcon, { forwardMotionProps: true });

  if (!weather && !loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Searchbar />

      <m.div
        variants={parentAnim}
        initial="initial"
        animate="show"
        className="z-10 flex flex-col items-center justify-center gap-32 px-12 pt-4 pb-20 md:px-44"
      >
        <div className="glassmorph h-80 w-full ">
          <Map lat={lat} lon={lon} />
        </div>

        {weather && (
          <m.div
            variants={parentAnim}
            initial="initial"
            whileInView="show"
            className="glassmorph flex w-full flex-col justify-between rounded-xl px-12 py-12 md:flex-row-reverse md:px-20"
          >
            <m.div layout className="flex w-min -translate-y-32 flex-col">
              <MotionWeatherIcon variants={childAnim} icon={icon} />
              <m.span
                variants={childAnim}
                className="text-4xl font-bold uppercase text-white"
              >
                {description}
              </m.span>
            </m.div>

            <m.div
              variants={parentAnim}
              initial="initial"
              whileInView="show"
              className="flex flex-col items-start justify-between md:w-1/2"
            >
              <m.span
                variants={childAnim}
                className="text-4xl font-normal text-white"
              >
                {location}
              </m.span>

              <m.p
                variants={childAnim}
                className="text-7xl font-bold text-white"
              >
                <Temp temp={temp} />
              </m.p>
              <m.p variants={childAnim} className="text-4xl text-white">
                Max: <Temp temp={tempMax} />
                <br />
                Min: <Temp temp={tempMin} />
              </m.p>
            </m.div>
          </m.div>
        )}
      </m.div>
    </>
  );
};

export default Weather;
