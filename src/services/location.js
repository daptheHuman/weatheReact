import axios from 'axios';

const token = process.env.REACT_APP_LOCATIONIQ_TOKEN;
const endpoint = process.env.REACT_APP_LOCATIONIQ_ENDPOINT;

// Convert address to lat/lng
const getLongLat = async (addressQ) => {
  const response = await axios({
    method: 'get',
    url: `${endpoint}/v1/search.php?key=${token}&q=${addressQ}&format=json`,
  });
  const { lat, lon, display_name: displayName } = response.data[0];
  const location = displayName.split(',')[0];
  return { lat, lon, location };
};

const getAllCity = async () => {};

export { getLongLat, getAllCity };
