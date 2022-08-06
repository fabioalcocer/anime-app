import React from "react";
import {FiGithub,FiInstagram,FiLinkedin,FiTwitter} from "react-icons/fi";

function Footer() {
  return (
    <footer className="container text-center bg-gray-900 text-white">
      
      <a
        href="https://twitter.com/Open_Bootcamp"
        type="button"
        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
      >
        <FiTwitter className="w-4 h-full mx-auto"/>
      </a>

      

      <a
        href="https://www.instagram.com/openbootcamp_/"
        type="button"
        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
      >
        <FiInstagram className="w-4 h-full mx-auto"/>
      </a>

      <a
        href="https://www.linkedin.com/school/openbootcamp-escuela/"
        type="button"
        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
      >
   <FiLinkedin className="w-4 h-full mx-auto"/>
      </a>

      <a
        href="https://github.com/fabioalcocer/anime-app.git"
        type="button"
        className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
      >
        <FiGithub className="w-4 h-full mx-auto"/>
      </a>

      <div className="text-center h-full p-2 bg-gray-800" >
    © 2021 Copyright:
    <a className="text-whitehite" href="https://bit.ly/3E5AGBt">OpenBootcamp</a>
  </div>
    </footer>
  );
}

export default Footer;
