import React from "react";
import img from "../assets/features.jpg";

function Destination() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">Most Popular Destinations</h1>
      {/* cards */}
      <div className="mt-12 flex justify-center space-x-12">
        <div class="max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <img class="w-full" src={img} alt="beach" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Paris, France</div>
            <p class="text-gray-700 text-left">
              Paris offers iconic landmarks like the Eiffel Tower and
              world-class art at the Louvre Museum.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
        <div class="max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <img class="w-full" src={img} alt="beach" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Dubai, UAE</div>
            <p class="text-gray-700 text-left">
              A city of superlatives, Dubai boasts towering skyscrapers, luxury
              shopping, and desert adventures
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button className="bg-yellow-300 hover:bg-cyan-300 w-44 h-12 text-xl rounded-full font-semibold">
              Book Tickets
            </button>
          </div>
        </div>
        <div class="max-w-sm  overflow-hidden  rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <img class="w-full" src={img} alt="beach" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Venice, Italy</div>
            <p class="text-gray-700 text-left">
              Explore the romantic canals and historic architecture of Venice, a
              city built on water.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
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
