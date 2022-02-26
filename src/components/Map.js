/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import { Map as MapGL, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Map = ({ lat, lon }) => {
  const [viewport, setViewport] = useState({
    latitude: parseFloat(lat),
    longitude: parseFloat(lon),
    zoom: 15,
  });

  return (
    <MapGL
      initialViewState={viewport}
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        borderRadius: '50px',
      }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMove={(evt) => setViewport(evt.viewState)}
    >
      <Marker longitude={parseFloat(lon)} latitude={parseFloat(lat)} />
      <NavigationControl />
    </MapGL>
  );
};

Map.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};

export default Map;
