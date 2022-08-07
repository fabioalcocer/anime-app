import { useState } from "react";
import ViewBtn from "./ViewBtn";
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

function Card({ title, opName, img, opening }) {
  const sound = new Audio(`${opening}`);

  const [controls, setControls] = useState(true);
  const [op, setOp] = useState(sound);

  const handleControls = () => {
    controls ? setControls(false) : setControls(true);
    console.log(op.paused);

    op.paused ? op.play() : op.pause();
  };

  return (
    <div className="flex h-48 w-full max-w-lg flex-col overflow-hidden rounded-md contrast-125">
      <img
        src={img}
        className="absolute top-0 left-0 bottom-0 right-0 z-0 h-full w-full object-cover"
      />
      <p className="p-5 text-lg font-bold text-white drop-shadow-3xl">
        {title}
      </p>
      <div className="mt-auto flex h-1/2 w-full translate-y-1 flex-col justify-center gap-4 rounded-sm bg-black/40 sm:bg-black/30 sm:backdrop-blur-sm px-4 transition-transform duration-500 sm:h-[38%] sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-red-100 drop-shadow-3xl md:text-lg">
          {opName}
        </h3>
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={() => {
              handleControls();
            }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
          >
            <span
              className="relative flex gap-2 rounded-md bg-white py-1 px-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
              title="play"
            >
              {controls ? (
                <>
                  <FiPlayCircle className="text-2xl" /> Play
                </>
              ) : (
                <>
                  <FiPauseCircle className="text-2xl" /> Pause
                </>
              )}
            </span>
          </button>
          <ViewBtn />
        </div>
      </div>
    </div>
  );
}

export default Card;
