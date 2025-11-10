import React, { useState, useEffect, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blogData from "../../data/blogData";

const Clockinsights = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotation, setRotation] = useState(0);
  const slides = blogData;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setRotation((prev) => prev + 360 / slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setRotation(index * (360 / slides.length));
  };

  return (
    <div className="clockinsights-wrapper min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
      {/* ---------------- DESKTOP / TABLET VIEW ---------------- */}
      <div className="section">
        <div className="container-medium">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h2 className=" py-2 mb-6">Insights & Stories</h2>
          </div>
        </div>
      </div>{" "}
      <div className="hidden md:flex items-center justify-between gap-24 w-full max-w-7xl">
        <div
          className="relative flex-shrink-0"
          style={{
            width: "500px",
            height: "500px",
            transform: "translateX(100px)",
          }}
        >
          <div className="w-full h-full relative">
            {/* MAIN CIRCLE */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="absolute inset-0"
                  style={{
                    opacity: index === activeSlide ? 1 : 0,
                    transform:
                      index === activeSlide ? "scale(1)" : "scale(1.05)",
                    transition:
                      "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* OUTER RING */}
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-200"
              style={{ transform: "scale(1.05)" }}
            />

            {/* NUMBERS */}
            {slides.map((slide, index) => {
              const totalArc = 60;
              const angleStart = 240;
              const angleStep = totalArc / (slides.length - 1);
              const angle = angleStart + index * angleStep;
              const radius = 300;
              const x = radius * Math.cos(((angle - 90) * Math.PI) / 180) - 20;
              const y = radius * Math.sin(((angle - 90) * Math.PI) / 180);

              return (
                <button
                  key={slide.id}
                  onClick={() => handleSlideChange(index)}
                  className={`absolute transition-all duration-700 ease-out ${
                    index === activeSlide
                      ? "scale-125 z-30"
                      : "scale-100 opacity-40 hover:opacity-80 hover:scale-110 z-20"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-500 ${
                      index === activeSlide
                        ? "bg-blue-600 text-white shadow-2xl ring-4 ring-blue-200"
                        : "bg-white text-gray-400 border-2 border-gray-300 shadow-md"
                    }`}
                  >
                    {slide.id}
                  </div>
                </button>
              );
            })}
          </div>

          {/* TEXT SECTION */}
        </div>
        <div className="flex-1 max-w-xl ml-12 relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeSlide].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-0 left-0 right-0"
            >
              <motion.h2
                className="text-4xl font-bold text-gray-800 mb-4 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
              >
                {slides[activeSlide].title}
              </motion.h2>

              <motion.p
                className="text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                {slides[activeSlide].desc}
              </motion.p>

              <motion.button
                onClick={() => {
                  startTransition(() => {
                    navigate(`/blog/${slides[activeSlide].id}`);
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
              >
                Read More
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* ---------------- MOBILE VIEW ---------------- */}
      <div className="flex flex-col items-center justify-center md:hidden mt-4">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Insights & Stories
        </h2>

        {/* Circle image */}
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-8 border-white mb-4">
          <img
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Numbers row */}
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full flex items-center justify-center font-bold text-sm ${
                index === activeSlide
                  ? "bg-blue-600 text-white w-8 h-8"
                  : "bg-white text-gray-400 border border-gray-300 w-8 h-8"
              }`}
            >
              {slide.id}
            </button>
          ))}
        </div>

        {/* Text content */}
        <div className="text-center max-w-xs">
          <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
            {slides[activeSlide].title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-snug">
            {slides[activeSlide].desc}
          </p>
          <button
            onClick={() => {
              startTransition(() => {
                navigate(`/blog/${slides[activeSlide].id}`);
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg flex items-center gap-2 mx-auto"
          >
            Read More
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clockinsights;
