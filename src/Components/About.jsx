import React from "react";
import img from "../assets/about.jpg";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className="mt-24 min-h-screen flex flex-col lg:flex-row items-center lg:px-32 gap-10">
      <div className="m-3 md:w-1/2 space-y-9 mt-8 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-bold ">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                " At TripMood, we are ready to provide you with the best trip of your life!",
              ],
            }}
          />
        </h1>
        <p className="text-xl lg:text-2xl">
          Your dream vacation awaits, and we're here to make it a reality.
        </p>
        <div data-AOS="flip-left">
          <button className="bg-yellow-300 hover:bg-cyan-300 text-black w-48 h-14 text-xl rounded-full font-semibold">
            Contact Now
          </button>
        </div>
      </div>
      <div className="w-3/4 md:w-1/2" data-AOS="zoom-in">
        <img
          src={img}
          alt="picture"
          className="w-full rounded-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        />
      </div>
    </div>
  );
}

export default About;
