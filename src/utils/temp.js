import propTypes from 'prop-types';

const Temp = ({ temp }) => {
  return <span>{temp.toFixed(0)}ºC</span>;
};

Temp.propTypes = {
  temp: propTypes.number.isRequired,
};
export default Temp;
