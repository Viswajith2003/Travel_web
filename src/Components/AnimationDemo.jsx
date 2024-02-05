import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

function ScrollAnimation() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold mb-14">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["React Scroll_Animation"],
          }}
        />
      </h1>
      <h2 className="text-center text-2xl">Fade</h2>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3 "
        data-AOS="fade-up"
      ></div>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3 "
        data-AOS="fade-down"
      ></div>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3 "
        data-AOS="fade-right"
      ></div>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3 "
        data-AOS="fade-left"
      ></div>
      <h2 className="text-center text-2xl">Flip</h2>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3"
        data-AOS="flip-right"
      ></div>
      <h2 className="text-center text-2xl">Zoom Animaiton</h2>
      <div
        className="bg-pink-400 border-4 border-black  w-64 h-28 m-3"
        data-AOS="zoom-in"
      ></div>
    </div>
  );
}

export default ScrollAnimation;
