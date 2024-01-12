import React from "react";
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin,FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-200 text-black py-12 mt-7">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Anurag</span>
              <span className="text-slate-700 hover:text-orange-700 ">Estate</span>
            </h1>
          </Link>
        </div>
        <div className="mt-3 sm:mt-0">
          <p className="text-sm">&copy; 2024 All rights reserved.</p>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <a href="#" className="text-black hover:text-orange-700 ">
            <FaFacebook />
          </a>
          <a href="#" className="text-black hover:text-orange-700 ">
            <FaTwitter />
          </a>
          <a href="#" className="text-black hover:text-orange-700 ">
            <FaLinkedin />
          </a>
          <a href="#" className="text-black hover:text-orange-700 ">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
