import ViewBtn from "./ViewBtn";

function Card({ title, img }) {
  return (
    <div className="flex h-48 w-full max-w-lg flex-col overflow-hidden rounded-md contrast-125 sm:h-40 md:h-48">
      <img
        src={img}
        className="absolute top-0 left-0 bottom-0 right-0 z-0 h-full w-full object-cover"
      />
      <p className="p-5 text-lg font-bold text-white drop-shadow-3xl">
        {title}
      </p>
      <div className="mt-auto flex h-1/2 w-full translate-y-1 flex-col justify-center gap-4 rounded-sm bg-black/30 px-4 backdrop-blur-sm transition-transform duration-500 sm:h-[40%] sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-red-100 drop-shadow-3xl md:text-lg">
          Guren No Yumiya OP.1
        </h3>
        <div className="flex items-center gap-3 sm:gap-5">
          <ViewBtn />
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-bold text-gray-900 hover:text-white focus:outline-none group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white">
            <span className="relative rounded-md bg-white py-[6px] px-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              View More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
