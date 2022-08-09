function ViewBtn({ show }) {
  function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

  return (
    <button
      onClick={() => {
        disableScroll();
        show();
      }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-bold text-gray-900 hover:text-white focus:outline-none group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white"
    >
      <span className="relative rounded-md bg-white py-[6px] px-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        View More
      </span>
    </button>
  );
}

export default ViewBtn;
