import React from "react";

function Footer() {
  return (
    <div className="flex justify-between md:px-32 px-5 gap-10">
      <div>
        <h1>TripMood</h1>
        <p className="text-left">
          With TripMood you can experience <br /> new travel and the best tourist <br />
          destination that we have to offer
        </p>
      </div>
      <div>
        <h1>Destination</h1>
        <h3>Paris,France</h3>
        <h3>Dubai,UAE</h3>
        <h3>Venice, Italy</h3>
        <h3>Lakshadweep</h3>
      </div>
      <div>
        <h1>About</h1>
        <h3>Contact us</h3>
        <h3>Testimonial</h3>
        <h3>Rating</h3>
      </div>
      <div>
        <h1>Follow Us</h1>
        <p>facebook</p>
        <p>Youtube</p>
        <p>instagram</p>
      </div>
    </div>
  );
}

export default Footer;
