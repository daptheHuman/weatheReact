import { DominoSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 text-white">
      <DominoSpinner
        size={150}
        color="#fff"
        backColor="#0880C0"
        frontColor="#fff"
      />
      <span className="text-5xl ">loading...</span>
    </div>
  );
};

export default Loading;
