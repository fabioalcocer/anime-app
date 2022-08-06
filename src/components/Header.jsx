import Logo from "../assets/logo.png";

function header() {
  return (
    <>
      <div className="text-center bg-blue-1100 flex items-center justify-between p-4 uppercase text-xl font-bold 	">
        <img className="w-20 h-14" src={Logo} alt="logo" />
        <h1>App Anime</h1>
      </div>
    </>
  );
}

export default header;
