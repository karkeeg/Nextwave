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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-between gap-24">
          {/* CLOCK SECTION */}
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

              {/* CLOCK HAND */}
              <div
                className="absolute top-1/2 left-1/2 bg-gray-600 origin-bottom z-10"
                style={{
                  width: "2px",
                  height: "54%",
                  transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
                  transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />

              {/* OUTER RING */}
              <div
                className="absolute inset-0 rounded-full border-2 border-blue-200"
                style={{ transform: "scale(1.05)" }}
              />
            </div>

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
      </div>
    </div>
  );
};

export default Clockinsights;
