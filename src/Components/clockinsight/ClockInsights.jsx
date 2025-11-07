import React, { useState, useEffect } from "react";

const Clockinsights = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotation, setRotation] = useState(0);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "Introducing NextWaveAI:",
      subtitle: "The Future of Intelligent Solutions",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      number: "02",
      title: "Transform Your Business:",
      subtitle: "AI-Powered Analytics & Insights",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      number: "03",
      title: "Innovation at Scale:",
      subtitle: "Building Tomorrow's Technology Today",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop",
    },
    {
      id: 4,
      number: "04",
      title: "Seamless Integration:",
      subtitle: "Connect, Automate, and Grow",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    },
  ];

  // smoothly rotate instead of resetting
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

              {/* CLOCK HAND (smooth continuous rotation) */}
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

            {/* NUMBERS — moved slightly LEFT and tighter curve */}
            {slides.map((slide, index) => {
              const totalArc = 60;
              const angleStart = 240;
              const angleStep = totalArc / (slides.length - 1);
              const angle = angleStart + index * angleStep;

              // ✅ smaller radius (closer to circle)
              const radius = 300; // was 300

              // ✅ shift left slightly (-20px more)
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
                    {slide.number}
                  </div>
                </button>
              );
            })}
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1 max-w-xl ml-12 relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${
                  index === activeSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12 absolute pointer-events-none"
                }`}
                style={{
                  transition:
                    "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center gap-3 group">
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
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clockinsights;
