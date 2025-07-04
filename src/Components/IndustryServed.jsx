import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Replace these URLs with your actual images for best results
const images = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // top left
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // top mid left
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // top mid right
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // top right
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // center
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // bottom left
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // bottom mid left
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // bottom mid right
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // bottom right
];

const IndustryServed = () => {
  return (
    <section className="w-full min-h-screen  py-12 px-2 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] text-center mb-2 font-['Inter']">
        Industries Served
      </h2>
      <p className="text-[#7B8591] text-base text-center mb-10 font-['Inter']">
        Specialized technical solutions that power modern businesses with
        cutting-edge technology.
      </p>
      <div className="w-full max-w-6xl bg-[#F4F8FE] rounded-xl mx-auto px-2 py-8 md:py-12 flex flex-col items-center">
        {/* Custom Grid */}
        <div className="relative w-full flex justify-center items-center mb-10">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10">
            <FaChevronLeft size={24} />
          </button>
          <div className="mx-auto w-full max-w-5xl grid grid-cols-6 grid-rows-3 gap-4">
            {/* Left column */}
            <img
              src={images[0]}
              alt=""
              className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[5]}
              alt=""
              className="col-start-1 col-end-2 row-start-2 row-end-4 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[1]}
              alt=""
              className="col-start-2 col-end-3 row-start-1 row-end-3 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[6]}
              alt=""
              className="col-start-2 col-end-3 row-start-3 row-end-4 w-full h-full rounded-2xl object-cover"
            />
            {/* Center big image */}
            <img
              src={images[4]}
              alt=""
              className="col-start-3 col-end-5 row-start-1 row-end-6 w-full h-full rounded-2xl object-cover shadow-lg border-white"
            />
            {/* Right column */}
            <img
              src={images[2]}
              alt=""
              className="col-start-5 col-end-6 row-start-1 row-end-2 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[7]}
              alt=""
              className="col-start-5 col-end-6 row-start-2 row-end-4 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[3]}
              alt=""
              className="col-start-6 col-end-7 row-start-1 row-end-3 w-full h-full rounded-2xl object-cover"
            />
            <img
              src={images[8]}
              alt=""
              className="col-start-6 col-end-7 row-start-3 row-end-4 w-full h-full rounded-2xl object-cover"
            />
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10">
            <FaChevronRight size={24} />
          </button>
        </div>
        {/* Service Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#232B36] text-center mb-4 font-['Inter']">
          Financial Services
        </h3>
        {/* Features */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <ul className="text-[#2176C1] text-base font-medium list-disc pl-5 space-y-2">
            <li>Fraud detection</li>
            <li>AI-driven risk assessment</li>
          </ul>
          <ul className="text-[#2176C1] text-base font-medium list-disc pl-5 space-y-2">
            <li>Personalized financial insights</li>
            <li>Automated customer support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
