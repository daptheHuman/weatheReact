/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import propTypes from 'prop-types';

const Object = ({ icon }) => {
  const weatherImages = require(`../assets/3d/weather/${icon}.png`);
  return <img src={weatherImages} className="" alt={icon} />;
};

Object.propTypes = {
  icon: propTypes.string.isRequired,
};

export default Object;
