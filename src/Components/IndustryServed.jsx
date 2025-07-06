import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const industryData = [
  {
    title: "Financial Services",
    images: [
      "https://images.unsplash.com/photo-1556742400-b5da35d32d78",
      "https://images.unsplash.com/photo-1585241936939-bc16c66f1f48",
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
    ],
    features: [
      ["Fraud detection", "AI-driven risk assessment"],
      ["Personalized financial insights", "Automated customer support"],
    ],
  },
  {
    title: "Education",
    images: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      "https://images.unsplash.com/photo-1558024920-b63f9a365f84",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    ],
    features: [
      ["E-learning platforms", "Virtual classrooms"],
      ["Smart assessments", "Course recommendation engines"],
    ],
  },
  {
    title: "IT Services",
    images: [
      "https://images.unsplash.com/photo-1581093588401-22a9a2a60c8e",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1614064641938-e0f2d94ad6cd",
    ],
    features: [
      ["Cloud infrastructure", "Managed IT services"],
      ["Cybersecurity solutions", "Software support"],
    ],
  },
  {
    title: "Website Development",
    images: [
      "https://images.unsplash.com/photo-1581090700227-1e8e8dd214e4",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490",
      "https://images.unsplash.com/photo-1587620931232-efe7f5b9c4b3",
    ],
    features: [
      ["Custom website design", "SEO optimization"],
      ["Responsive layouts", "Backend integrations"],
    ],
  },
];

const IndustryServed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? industryData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === industryData.length - 1 ? 0 : prev + 1
    );
  };

  const { title, images, features } = industryData[currentIndex];

  return (
    <section className="w-full min-h-screen py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] text-center mb-2 font-['Inter']">
        Industries Served
      </h2>
      <p className="text-[#7B8591] text-base text-center mb-10 font-['Inter']">
        Specialized technical solutions that power modern businesses with
        cutting-edge technology.
      </p>

      <div className="w-full max-w-6xl bg-[#F4F8FE] rounded-xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center relative overflow-hidden">
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handlePrev}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handleNext}
        >
          <FaChevronRight size={24} />
        </button>

        {/* 3 Image Flex Row */}
        <div className="flex justify-center items-center gap-6 mb-10 transition-all duration-500">
          {images.map((img, index) => {
            const isHovered = hoveredIndex === index;
            const isCenter = index === 1;
            const scale = isHovered
              ? "scale-110"
              : isCenter
              ? "scale-105"
              : hoveredIndex !== null
              ? "scale-90"
              : "scale-100";

            return (
              <img
                key={index}
                src={img}
                alt={`industry-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-80 h-60 rounded-2xl object-cover shadow-lg transition-all duration-300 ease-in-out ${scale}`}
              />
            );
          })}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-[#232B36] text-center mb-4 font-['Inter']">
          {title}
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {features.map((column, idx) => (
            <ul
              key={idx}
              className="text-[#2176C1] text-base font-medium list-disc pl-5 space-y-2"
            >
              {column.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
