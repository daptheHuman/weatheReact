/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import propTypes from 'prop-types';
import { forwardRef } from 'react';

const WeatherIcon = forwardRef(({ icon }, ref) => {
  const weatherImages = require(`../assets/3d/weather/${icon}.png`);
  return <img ref={ref} src={weatherImages} className="" alt={icon} />;
});

WeatherIcon.propTypes = {
  icon: propTypes.string.isRequired,
};

export default WeatherIcon;
