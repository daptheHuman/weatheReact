import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const Search = () => {
  const date = new Date();
  const hour = date.getHours();

  const [greet, setGreet] = useState('');
  useEffect(() => {
    if (hour >= 0 && hour < 12) {
      setGreet('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreet('Good Afternoon');
    } else {
      setGreet('Good Evening');
    }
  }, [hour]);

  return (
    <div className="">
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black text-white md:text-9xl">{greet}!</h1>
        <h1 className="p-2 font-light text-white md:text-4xl">
          How is the weather out today?
        </h1>
        <Searchbar />
      </div>

      <img
        src="/assets/3d/rocket.svg"
        alt="rocket"
        className="absolute right-0 top-0 z-0 h-3/4  md:translate-y-40 "
      />
    </div>
  );
};

export default Search;
