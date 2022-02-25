import propTypes from 'prop-types';

const Object = ({ icon }) => {
  return <img src={`assets/3d/weather/${icon}.png`} className="" alt={icon} />;
};

Object.propTypes = {
  icon: propTypes.string.isRequired,
};

export default Object;
