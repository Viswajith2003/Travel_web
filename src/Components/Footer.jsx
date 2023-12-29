import React from "react";

function Footer() {
  return (
    <div className="mb-14 mt-8 flex justify-between md:px-32 px-5 gap-10">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">TripMood</h1>
        <p className="font-semibold text-gray-600">
          With TripMood you can experience <br /> new travel and the best
          tourist <br />
          destination that we have to offer
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Destination</h1>
        <h3 className="font-semibold text-gray-600">Paris,France</h3>
        <h3 className="font-semibold text-gray-600">Dubai,UAE</h3>
        <h3 className="font-semibold text-gray-600">Venice, Italy</h3>
        <h3 className="font-semibold text-gray-600">Lakshadweep</h3>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">About</h1>
        <h3 className="font-semibold text-gray-600">Contact us</h3>
        <h3 className="font-semibold text-gray-600">Testimonial</h3>
        <h3 className="font-semibold text-gray-600">Rating</h3>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Follow Us</h1>
        <p className="font-semibold text-gray-600">facebook</p>
        <p className="font-semibold text-gray-600">Youtube</p>
        <p className="font-semibold text-gray-600">instagram</p>
      </div>
    </div>
  );
}

export default Footer;
