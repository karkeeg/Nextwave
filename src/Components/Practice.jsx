import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const industries = [
  {
    title: "Education",
    image: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // top left
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // top mid left
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // top mid right
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "E-learning platforms",
      "AI-powered tutoring",
      "Student analytics",
      "Automated grading",
    ],
  },
  {
    title: "IT & Software",
    image: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // top left
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // top mid left
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // top mid right
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // top right

      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Cloud solutions",
      "DevOps automation",
      "Cybersecurity",
      "Custom software development",
    ],
  },
  {
    title: "Website Building",
    image: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // top left
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // top mid left
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // top mid right
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // top right

      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Responsive design",
      "SEO optimization",
      "E-commerce integration",
      "Content management",
    ],
  },
  {
    title: "Healthcare",
    image: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // top left
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // top mid left
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // top mid right
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // top right

      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Patient management",
      "Telemedicine",
      "AI diagnostics",
      "Health data analytics",
    ],
  },
];

const IndustryServed = () => {
  const [current, setCurrent] = useState(0);
  const total = industries.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const { title, image, features } = industries[current];

  return (
    <section className="w-full min-h-screen py-12 px-2 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] text-center mb-2 font-['Inter']">
        Industries Served
      </h2>
      <p className="text-[#7B8591] text-base text-center mb-10 font-['Inter']">
        Specialized technical solutions that power modern businesses with
        cutting-edge technology.
      </p>
      <div className="w-full max-w-2xl bg-[#F4F8FE] rounded-xl mx-auto px-2 py-8 md:py-12 flex flex-col items-center relative shadow-md">
        {/* Carousel Controls */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={prev}
          aria-label="Previous Industry"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="flex flex-col items-center w-full">
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#232B36] text-center mb-4 font-['Inter'] transition-all duration-300">
            {title}
          </h3>
          <ul className="text-[#2176C1] text-base font-medium list-disc pl-5 space-y-2 mb-2">
            {features.map((f, i) => (
              <li
                key={i}
                className="transition-all duration-300 hover:text-[#FFC043]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={next}
          aria-label="Next Industry"
        >
          <FaChevronRight size={24} />
        </button>
        <div className="flex gap-2 mt-6">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#2176C1]" : "bg-[#E9EDF2]"
              }`}
              aria-label={`Go to ${industries[idx].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
