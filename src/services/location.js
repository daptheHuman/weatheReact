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

const searchCompletion = async (textQuery) => {
  const response = await axios({
    method: 'get',
    url: `${endpoint}/v1/autocomplete.php?key=${token}&q=${textQuery}&dedupe=1`,
  });
  const displayName = response.data.map((city) => {
    // return display_name, place_id
    return {
      display_name: city.display_name,
      place_id: city.place_id,
    };
  });
  return displayName;
};

export { getLongLat, searchCompletion };
