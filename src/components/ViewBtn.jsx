import { FiPlayCircle } from "react-icons/fi";

function ViewBtn() {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
      <span className="relative flex gap-2 rounded-md bg-white p-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        <FiPlayCircle className="text-2xl"/>
        Play
      </span>
    </button>
  );
}

export default ViewBtn;
