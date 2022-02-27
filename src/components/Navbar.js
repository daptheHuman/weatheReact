import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import favicon from '../assets/favicon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-4 py-4 md:px-8">
      <Link to="/" className="text-2xl font-bold text-white">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <img src={favicon} alt="logo" className="h-10 md:h-16" />
          <span className="text-lg font-normal tracking-tight md:px-8 md:text-2xl">
            weatheReact
          </span>
        </div>
      </Link>

      <Link
        to="/about"
        className="hidden text-2xl font-normal text-white md:block"
      >
        about me!
      </Link>

      {/* Mobile Devices */}
      <Link to="/about" className="z-20 block h-6 text-white md:hidden">
        <SparklesIcon className="h-6" />
      </Link>
    </nav>
  );
};

export default Navbar;
