import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
import { getLongLat, searchCompletion } from '../services/location';
import { popupAnim } from '../utils/anim';

const Searchbar = () => {
  const [location, setLocation] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Debounce, so we don't make too many requests
    // Will make request when user stops typing for 3000ms
    const timeout = setTimeout(() => {
      if (location !== '') {
        searchCompletion(location).then((response) => {
          setSearchResults(response);
        });
      } else {
        setSearchResults([]);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [location]);

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
    setLocation('');
    setSearchResults([]);
  };

  return (
    <>
      {/* Modal */}
      <m.div
        variants={popupAnim}
        initial="hidden"
        animate={isOpened ? 'showModal' : 'hidden'}
        className="fixed inset-0 z-20 flex h-full w-full flex-col items-center justify-center bg-gray-900/50"
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
      </m.div>

      <div className="flex w-full flex-col items-center">
        <form
          autoComplete="off"
          className="m-4 mx-auto flex w-1/2 flex-row gap-2 rounded-lg bg-baby-blue p-2 md:w-1/3"
        >
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
        </form>

        <m.div
          variants={popupAnim}
          animate={searchResults.length > 0 ? 'show' : 'hidden'}
          className="z-10 mx-auto flex h-36 -translate-y-6 flex-col overflow-auto rounded-b-lg bg-baby-blue p-2 md:w-1/3"
        >
          {searchResults.map((result) => (
            <button
              key={result.place_id}
              className="w-full flex-none truncate bg-transparent p-2  text-white placeholder:text-white focus:outline-0"
              type="button"
              onClick={(e) => {
                setLocation(result.display_name);
                handleSearchButton(e);
              }}
            >
              {result.display_name}
            </button>
          ))}
        </m.div>
      </div>
    </>
  );
};

export default Searchbar;
