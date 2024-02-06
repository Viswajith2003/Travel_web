import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="mt-1 pt-6 pb-6  flex justify-between md:px-32 px-5 gap-10 bg-darkBackground text-white">
      <div className="space-y-5" data-aos="fade-down-right">
        <h1 className="text-3xl font-bold hover:text-yellow-300">TripMood</h1>
        <p className="font-semibold ">
          With TripMood you can experience <br /> new travel and the best
          tourist <br />
          destination that we have to offer
        </p>
      </div>
      <div className="space-y-4" data-aos="fade-right">
        <h1 className="text-2xl font-bold hover:text-yellow-300">Destination</h1>
        <nav className=" flex flex-col gap-2">
          <a className=" hover:text-cyan-500  transition-all cursor-pointer">
            Paris,France
          </a>
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Dubai,UAE
          </a>
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Venice, Italy
          </a>
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Lakshadweep
          </a>
        </nav>
      </div>
      <div className="space-y-4" data-aos="fade-left">
        <h1 className="text-2xl font-bold hover:text-yellow-300">About</h1>
        <nav className=" flex flex-col gap-2">
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Contact us
          </a>
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Testimonial
          </a>
          <a className="hover:text-cyan-500 transition-all cursor-pointer">
            Rating
          </a>
        </nav>
      </div>
      <div
        className="flex flex-col items-center space-y-4"
        data-aos="fade-down-left"
      >
        <h1 className="text-2xl font-bold hover:text-yellow-300">Follow Us</h1>
        <nav className=" flex flex-col gap-2">
          <a className="font-bold">
            <FaFacebook className="w-5 h-5 box-content px-3 py-2 rounded-lg shadow-lg shadow-white/50 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-300" />
          </a>
          <a className="font-bold">
            <FaYoutube className="w-5 h-5 box-content px-3 py-2 rounded-lg shadow-lg shadow-white/50 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-300" />
          </a>
          <a className="font-bold">
            <AiFillInstagram className="w-5 h-5 box-content px-3 py-2 rounded-lg shadow-lg shadow-white/50 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-300" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
