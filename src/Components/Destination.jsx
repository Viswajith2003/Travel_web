import React from "react";
import Paris from "../assets/paris.jpg";
import Dubai from "../assets/dubai.jpg";
import Italy from "../assets/italy.jpg";
import Dweep from "../assets/dweep.jpg";


function Destination() {
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center md:mx-32 mx-5">
      <h1 className="text-5xl font-bold mr-9 lg:mt-0 mt-16" data-AOS="flip-right">
        Most Popular Destinations
      </h1>
      {/* cards */}
      <div className="my-8 gap-8 md:mt-24 flex flex-col lg:flex-row justify-center">
        <div
          className="bg-slate-100 max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          data-aos="zoom-in"
        >
          <img className="w-full" src={Paris} alt="beach" />
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Paris, France</div>
            <p className="text-gray-700 text-left">
              Paris offers iconic landmarks like the Eiffel Tower and
              world-className art at the Louvre Museum.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
        <div
          className="bg-slate-100 max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          data-aos="zoom-in"
        >
          <img className="w-full" src={Dubai} alt="beach" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dubai, UAE</div>
            <p className="text-gray-700 text-left">
              A city of superlatives, Dubai boasts towering skyscrapers, luxury
              shopping, and desert adventures
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
        <div
          className="bg-slate-100 max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          data-aos="zoom-in"
        >
          <img className="w-full" src={Italy} alt="beach" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Venice, Italy</div>
            <p className="text-gray-700 text-left">
              Explore the romantic canals and historic architecture of Venice, a
              city built on water.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
        <div
          className="bg-slate-100 max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
          data-aos="zoom-in"
        >
          <img className="w-full" src={Dweep} alt="beach" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lakshadweep</div>
            <p className="text-gray-700 text-left">
              Explore the romantic canals and historic architecture of Venice, a
              city built on water.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 mb-3">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
