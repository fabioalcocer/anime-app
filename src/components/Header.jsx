function header() {
  return (
    <>
      <header className=" sticky top-0 z-10 bg-gray-900 py-3 px-4 text-center text-xl font-bold uppercase md:static">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <img
            className="h-14 w-20"
            src="https://res.cloudinary.com/daobmfotr/image/upload/v1659840619/anime-imgs/logo_rvw4yl.webp"
            alt="logo"
          />
          <h1>Anime App</h1>
        </div>
      </header>
    </>
  );
}

export default header;
