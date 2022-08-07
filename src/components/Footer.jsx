import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="container min-w-full bg-gray-900 text-center text-white">
      <div className="flex justify-center gap-5 p-2">
        <a
          href="https://twitter.com/Open_Bootcamp"
          target="_blank"
          type="button"
          className="m-1 text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          <BsTwitter className="transition-colors: mx-auto text-2xl text-slate-300 duration-300 hover:text-white" />
        </a>

        <a
          href="https://www.instagram.com/openbootcamp_/"
          target="_blank"
          type="button"
          className="m-1 text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          <BsInstagram className="transition-colors: mx-auto text-2xl text-slate-300 duration-300 hover:text-white" />
        </a>

        <a
          href="https://www.linkedin.com/school/openbootcamp-escuela/"
          target="_blank"
          type="button"
          className="m-1 text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          <BsLinkedin className="transition-colors: mx-auto text-2xl text-slate-300 duration-300 hover:text-white" />
        </a>

        <a
          href="https://github.com/fabioalcocer/anime-app.git"
          target="_blank"
          type="button"
          className="m-1 text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          <BsGithub className="transition-colors: mx-auto text-2xl text-slate-300 duration-300 hover:text-white" />
        </a>
      </div>

      <div className="bg-gray-800 p-4 text-center">
        <a className="text-sm text-slate-400" href="https://bit.ly/3E5AGBt">
          © 2022 OpenBootcamp Community™. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
