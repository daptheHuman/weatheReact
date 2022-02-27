import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
import { getLongLat } from '../services/location';

const Searchbar = () => {
  const [location, setLocation] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  const handleSearchButton = async (e) => {
    e.preventDefault();
    if (location === '') {
      setIsOpened(true);
    } else {
      const result = await getLongLat(location);
      navigate(
        `/search?lon=${result.lon}&lat=${result.lat}&location=${result.location}`,
      );
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className={`fixed inset-0 z-20 flex h-full w-full flex-col items-center justify-center bg-gray-900/50 ${
          isOpened ? '' : 'hidden'
        }`}
      >
        <div className="flex h-1/4 w-1/2 flex-col items-center justify-between overflow-hidden rounded-lg bg-slate-100 md:w-1/3">
          <span className="flex grow items-center text-xl font-bold text-slate-800 ">
            Please enter a location
          </span>
          <button
            className="w-full bg-star-blue py-3 text-sm text-white"
            type="button"
            onClick={() => setIsOpened(false)}
          >
            CLOSE
          </button>
        </div>
      </div>

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
    </>
  );
};

export default Searchbar;
