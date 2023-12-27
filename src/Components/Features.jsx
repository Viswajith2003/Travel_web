import React from "react";
import img from "../assets/features.jpg";
import { FaUserFriends } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";

function Features() {
  return (
    <div className="flex items-center min-h-screen">
      <div className="w-full p-5 ml-24">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold  mb-5">
            Get Ready to Explore, Get <br />
            Ready to Experience!
          </h1>
          <p className="text-xl">
            Discover the Best Holiday Experiences with TripPixie! We're
            dedicated to curating the latest and greatest destinations from
            around the world, ensuring you always get <br /> the ultimate travel
            experience.
          </p>
        </div>
        <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={img}
            alt="image"
          />
        </div>
      </div>

      <div className=" w-full space-y-14 pt-2 ml-12">
        <div className=" space-y-4 flex flex-row items-center">
          <div className="m-5 mr-8">
            <FaUserFriends className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3">Friendly Service</h2>
            <p className="text-[#898888]">
              We will provide excellent and friendly service for the sake of our
              customers.
            </p>
          </div>
        </div>
        <div className=" space-y-3 flex flex-row items-center">
          <div className="m-5 mr-8">
            <AiFillContacts className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Unforgettable experience
            </h2>
            <p className="text-[#898888]">
              We will provide excellent and Unforgettable experience for the
              sake of our customers.
            </p>
          </div>
        </div>
        <div className=" space-y-3 flex flex-row items-center">
          <div className="m-5 mr-8">
            <SiCashapp className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3">Affordable prices</h2>
            <p className="text-[#898888]">
              We will provide excellent and Affordable prices for the sake of
              our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
