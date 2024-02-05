import React from "react";
import img from "../assets/features.jpg";
import { FaUserFriends } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";


function Features() {
  return (
    <div className="flex flex-col md:flex-row text-center justify-center items-center min-h-screen md:mx-32 mx-5 gap-14 mt-14">
      <div className="w-full">
        <div className="space-y-6 lg:text-left" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-5">
            Get Ready to Explore, Get <br />
            Ready to Experience!
          </h1>
          <p className="text-xl">
            Discover the Best Holiday Experiences with TripPixie! We're
            dedicated to curating the latest and greatest destinations from
            around the world, ensuring you always get the ultimate travel
            experience.
          </p>
        </div>

        <div className="w-full lg:w-3/5 mt-10 lg:ml-14" data-aos="zoom-in" >
          <img
            className="rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={img}
            alt="image"
          />
        </div>
      </div>

      <div className=" w-full space-y-14 pt-2 ml-12">
        <div className=" space-y-4 flex flex-row items-center">
          <div className="m-5 mr-8" data-AOS="flip-right">
            <FaUserFriends className="w-8 h-8" />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-3">Friendly Service</h2>
            <p className="text-[#898888]">
              We will provide excellent and friendly service for the sake of our
              customers.
            </p>
          </div>
        </div>
        <div className=" space-y-3 flex flex-row items-center">
          <div className="m-5 mr-8" data-AOS="flip-right">
            <AiFillContacts className="w-8 h-8" />
          </div>
          <div data-aos="fade-left">
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
          <div className="m-5 mr-8" data-AOS="flip-right">
            <SiCashapp className="w-8 h-8" />
          </div>
          <div data-aos="fade-left">
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

// import React from "react";
// import img from "../assets/features.jpg";
// import { FaUserFriends } from "react-icons/fa";
// import { AiFillContacts } from "react-icons/ai";
// import { SiCashapp } from "react-icons/si";

// function Features() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 md:p-8">
//       <div className="w-full md:w-2/3 lg:w-1/2 text-center">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
//             Get Ready to Explore, Get <br />
//             Ready to Experience!
//           </h1>
//           <p className="text-lg md:text-xl">
//             Discover the Best Holiday Experiences with TripPixie! We're
//             dedicated to curating the latest and greatest destinations from
//             around the world, ensuring you always get the ultimate travel
//             experience.
//           </p>
//         </div>
//         <div className="w-full mt-10">
//           <img
//             className="rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto"
//             src={img}
//             alt="image"
//           />
//         </div>
//       </div>

//       <div className="w-full md:w-2/3 lg:w-1/2 space-y-14 pt-2 text-center">
//         <div className="space-y-4 flex flex-col items-center">
//           <div className="m-3">
//             <FaUserFriends className="w-8 h-8" />
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//               Friendly Service
//             </h2>
//             <p className="text-[#898888]">
//               We will provide excellent and friendly service for the sake of our
//               customers.
//             </p>
//           </div>
//         </div>
//         <div className="space-y-3 flex flex-col items-center">
//           <div className="m-3">
//             <AiFillContacts className="w-8 h-8" />
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//               Unforgettable experience
//             </h2>
//             <p className="text-[#898888]">
//               We will provide excellent and unforgettable experience for the
//               sake of our customers.
//             </p>
//           </div>
//         </div>
//         <div className="space-y-3 flex flex-col items-center">
//           <div className="m-3">
//             <SiCashapp className="w-8 h-8" />
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//               Affordable prices
//             </h2>
//             <p className="text-[#898888]">
//               We will provide excellent and affordable prices for the sake of
//               our customers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Features;
