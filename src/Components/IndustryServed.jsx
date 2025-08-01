import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const industryData = [
  {
    id: "financial-services",
    title: "Financial Services",
    images: [
      "https://images.unsplash.com/photo-1556742400-b5da35d32d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585241936939-bc16c66f1f48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      ["Fraud detection", "AI-driven risk assessment"],
      ["Personalized financial insights", "Automated customer support"],
    ],
  },
  {
    id: "education",
    title: "Education",
    images: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      ["E-learning platforms", "Virtual classrooms"],
      ["Smart assessments", "Course recommendation engines"],
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581093588401-22a9a2a60c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      ["Medical image analysis", "Predictive healthcare"],
      ["Patient data management", "Telemedicine solutions"],
    ],
  },
  {
    id: "technology",
    title: "Technology",
    images: [
      "https://images.unsplash.com/photo-1581093588401-22a9a2a60c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      ["Cloud infrastructure", "Managed IT services"],
      ["Cybersecurity solutions", "Software support"],
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581093588401-22a9a2a60c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      ["Predictive maintenance", "Quality automation"],
      ["Supply chain optimization", "Production planning"],
    ],
  },
];

const IndustryServed = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const handleIndustryClick = (industryId) => {
    navigate(`/industries/${industryId}`);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const { id, title, images, features } = industryData[currentIndex];

  return (
    <section className="w-full min-h-screen py-8 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] text-center font-['Inter']">
        Industries Served
      </h2>
      <p className="text-[#7B8591] text-base text-center mt-10 font-['Inter']">
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
                alt={`${title} - Image ${index + 1}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleIndustryClick(id)}
                className={`w-80 h-60 rounded-2xl object-cover shadow-lg transition-all duration-300 ease-in-out ${scale} cursor-pointer`}
              />
            );
          })}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-[#232B36] text-center mb-4 font-['Inter']">
          {title}
        </h3>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
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

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-3 mb-6">
          {industryData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#2176C1] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              isAutoPlaying 
                ? 'bg-[#2176C1] text-white hover:bg-[#185a96]' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
