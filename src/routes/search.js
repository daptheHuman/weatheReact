import { m } from 'framer-motion';
import { parentAnim, childAnim, rocketAnim } from '../utils/anim';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Greet from '../utils/greet';
import rocket from '../assets/3d/rocket.svg';

const Search = () => {
  const MotionSearchbar = m(Searchbar);

  return (
    <>
      <Navbar />

      <m.div
        variants={parentAnim}
        animate="show"
        initial="initial"
        className="relative z-10 flex flex-col items-center justify-center opacity-0"
      >
        <m.h1
          className="text-5xl font-black text-white md:text-9xl"
          variants={childAnim}
        >
          <Greet />!
        </m.h1>
        <m.h1
          variants={childAnim}
          className="p-2 font-light text-white md:text-4xl"
        >
          How is the weather out today?
        </m.h1>
        <MotionSearchbar variants={childAnim} />
      </m.div>

      <m.img
        variants={rocketAnim}
        animate="show"
        initial="initial"
        src={rocket}
        className="absolute right-0 bottom-0 z-0 h-3/4 md:translate-y-40 "
      />
    </>
  );
};

export default Search;
