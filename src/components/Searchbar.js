import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
import { getLongLat } from '../services/location';

const Searchbar = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearchButton = async (e) => {
    e.preventDefault();
    if (location === '') {
      alert('Please enter an location');
    } else {
      const result = await getLongLat(location);
      navigate(
        `/search?lon=${result.lon}&lat=${result.lat}&location=${result.location}`,
      );
    }
  };

  return (
    <div className="m-4 mx-auto flex w-1/2 flex-row gap-2 rounded-lg bg-baby-blue p-2 md:w-1/3">
      <button type="button" onClick={(e) => handleSearchButton(e)}>
        <SearchIcon className="h-5 w-5 text-white" />
      </button>

      <input
        className="grow bg-transparent text-white placeholder:text-white focus:outline-0"
        type="text"
        placeholder="Enter the location"
        value={location}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearchButton(e);
          }
        }}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
