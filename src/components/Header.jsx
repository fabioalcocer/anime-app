import Logo from "../assets/logo.png";

function header() {
  return (
    <>
      <header className=" bg-gray-900 py-3 px-4 text-center text-xl font-bold uppercase sticky top-0 md:static">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <img className="h-14 w-20" src={Logo} alt="logo" />
          <h1>Anime App</h1>
        </div>
      </header>
    </>
  );
}

export default header;
