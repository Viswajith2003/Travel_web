import React from "react";
import img from "../assets/contact.jpg";
import Typewriter from "typewriter-effect";

function Contacts() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-8 bg-[#95b6d9]  p-5 rounded-xl" data-aos="zoom-in">
          <h1 className="text-4xl font-bold text-center">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Contact Form"],
              }}
            />
          </h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Full Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Message</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center" data-aos="zoom-in">
            <button className="bg-yellow-300 hover:bg-cyan-300 text-black w-48 h-14 text-xl rounded-full font-semibold">
              Submit
            </button>
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-8" data-aos="flip-left">
          <img className=" rounded-lg" src={img} alt="" />
          <p className=" text-center text-sm pt-4 md:text-[#898888]">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance with your travel plans, please don't hesitate to
            reach out. Our team is here to assist you every step of the way.
            Simply fill out the form below, and we'll be in touch shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
