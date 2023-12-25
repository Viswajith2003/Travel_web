import React from "react";
import Button from "../Layouts/Button";
import img from "../assets/hero.jpg";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="flex justify-center items-center ml-10 mt-8">
      <div className=" flex flex-col text-start justify-center gap-8 ml-20">
        <h1 className="font-bold text-7xl leading-tight mb-">
          Discover the Best Destinations
        </h1>
        <p className="text-2xl ">
          With TripMood you can experience new travel and the best tourist
          destinations that we have to offer.
        </p>
        <div className="mt-8 text-center items-center">
          <button className="bg-yellow-300 hover:bg-cyan-300 w-48 h-12 text-xl rounded-full font-bold">
            Destinations
          </button>
        </div>
      </div>
      <div className="mt-14 ml-5 lg:mt-0 lg:w-4/5 w-full bg-blue-300">
        <img src={img} alt="picture" />
      </div>
    </div>
  );
}

export default Home;
