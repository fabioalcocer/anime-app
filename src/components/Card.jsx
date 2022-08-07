import ViewBtn from "./ViewBtn";

function Card({ title, img }) {
  return (
    <div
      className={`flex h-32 w-full max-w-lg flex-col overflow-hidden rounded-md bg-${img} bg-cover bg-no-repeat contrast-125 sm:h-36 md:h-44`}
    >
      <p className="p-5 text-lg font-bold text-white drop-shadow-3xl">
        {title}
      </p>
      <div className="mt-auto flex h-[40%] w-full translate-y-1 items-center justify-between rounded-sm bg-black/30 backdrop-blur-sm transition-transform duration-500 px-4">
        <h3 className="font-semibold drop-shadow-3xl text-red-100">Guren No Yumiya OP.1</h3>
        <div className="flex items-center gap-5">
          <ViewBtn />
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-bold text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800">
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              View More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
