import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="container min-w-full bg-gray-900 text-center text-white">
      <div className="flex justify-center gap-2 p-2">
        <a
          href="https://twitter.com/Open_Bootcamp"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          <FiTwitter className="mx-auto h-full w-4" />
        </a>

        <a
          href="https://www.instagram.com/openbootcamp_/"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          <FiInstagram className="mx-auto h-full w-4" />
        </a>

        <a
          href="https://www.linkedin.com/school/openbootcamp-escuela/"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          <FiLinkedin className="mx-auto h-full w-4" />
        </a>

        <a
          href="https://github.com/fabioalcocer/anime-app.git"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          <FiGithub className="mx-auto h-full w-4" />
        </a>
      </div>

      <div className="bg-gray-800 p-4 text-center">
        <a className="text-sm" href="https://bit.ly/3E5AGBt">
          © 2022 OpenBootcamp Community™. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
