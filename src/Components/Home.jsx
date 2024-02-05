import React, { useEffect } from "react";
import Button from "../Layouts/Button";
import img from "../assets/hero.jpg";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center ml-10">
      <div
        className="flex flex-col text-center lg:text-start justify-center mt-20 mr-10 lg:mt-8 gap-8 lg:ml-20"
        data-aos="fade-right"
      >
        <h1 className="font-bold text-6xl lg:text-7xl leading-tight">
          Discover the Best Destinations
        </h1>
        <p className="text-xl lg:text-2xl">
          With TripMood you can experience new travel and the best tourist
          destinations that we have to offer.
        </p>
        <div className="lg:mt-8 text-center items-center" data-AOS="flip-right">
          <button className="bg-yellow-300 hover:bg-cyan-300 w-48 h-12 text-xl rounded-full font-bold">
            Destinations
          </button>
        </div>
      </div>
      <div className="lg:mt-14 lg:ml-5 lg:w-4/5 mt-10 w-full bg-blue-300"
      data-aos="fade-left">
        <img src={img} alt="picture" />
      </div>
    </div>
  );
}

export default Home;
