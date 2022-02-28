import robot from '../assets/3d/robot.png';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-row flex-wrap items-center justify-center px-8 text-white">
        <img src={robot} alt="robot" className="max-h-screen max-w-full" />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-7xl font-bold">404!</h1>
          <p className="text-3xl">
            A page that you&apos;re looking is not found
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
