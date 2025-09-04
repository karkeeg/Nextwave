import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const industryData = [
  {
    id: "financial-services",
    title: "Financial Services",
    images: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
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
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? industryData.length - 1 : prev - 1
    );
    setSelectedFeature(null); // Reset feature selection when changing industry
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === industryData.length - 1 ? 0 : prev + 1
    );
    setSelectedFeature(null); // Reset feature selection when changing industry
  };

  const handleIndustryClick = (industryId) => {
    navigate(`/industries/${industryId}`);
  };

  const handleFeatureSelect = (industryId, feature) => {
    setSelectedFeature(feature);
    // You could add additional logic here, like tracking which feature was selected
    console.log(`Selected feature: ${feature} for industry: ${industryId}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const { id, title, images, features } = industryData[currentIndex];

  return (
    <section className="w-full min-h-screen px-4 pt-14 mb-20 flex flex-col items-center">
      <h2 className="text-center">
        Industries Served
      </h2>
      <p className="text-center">
        Specialized technical solutions and power modern businesses with
        cutting-edge technology.
      </p>

      <div className="w-full max-w-6xl bg-[#F4F8FE] rounded-xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center relative overflow-hidden mt-2">
        {/* Navigation */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handlePrev}
          aria-label="Previous industry"
        >
          <FaChevronLeft size={24} aria-hidden="true" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handleNext}
          aria-label="Next industry"
        >
          <FaChevronRight size={24} aria-hidden="true" />
        </button>

        {/* Three-image carousel block with fade animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={title + "-images"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap"
          >
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onClick={() => handleIndustryClick(id)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative w-44 sm:w-40 md:w-62 lg:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out ${scale}`}
                >
                  <img
                    src={img}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Title with fade animation */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#1E93AB] text-center mt-6 mb-6"
          >
            {title}
          </motion.h3>
        </AnimatePresence>

        {/* Features with fade animation, centered layout, and radio buttons */}
        <AnimatePresence mode="wait">
          <motion.div
            key={title + "-features"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8 text-center"
          >
            {features.map((column, idx) => (
              <motion.ul
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + idx * 0.2 }}
                className="text-[#2176C1] text-base font-medium space-y-4"
              >
                {column.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 + i * 0.1 }}
                    className="flex items-center justify-start gap-3 cursor-pointer group"
                    onClick={() => handleFeatureSelect(id, feature)}
                  >
                    {/* Radio button */}
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        id={`industry-feature-${id}-${i}`}
                        name="industry-feature"
                        checked={selectedFeature === feature}
                        onChange={() => handleFeatureSelect(id, feature)}
                        className="absolute opacity-0 cursor-pointer w-2 h-2"
                        aria-label={`Select ${feature}`}
                      />
                      <label 
                        htmlFor={`industry-feature-${id}-${i}`}
                        className={`w-2 h-2 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                          selectedFeature === feature 
                            ? "border-[#2176C1] bg-slate-800" 
                            : "border-[#1E93AB] bg-[#1E93AB] group-hover:border-[#2176C1]"
                        }`}
                        aria-hidden="true"
                      >
                        {selectedFeature === feature && (
                          <span className="sr-only">Selected: {feature}</span>
                        )}
                      </label>
                    </div>
                    
                    {/* Feature text */}
                    <span className={`transition-colors text-left ${
                      selectedFeature === feature 
                        ? "text-[#2176C1] font-semibold" 
                        : "text-[#1E93AB] group-hover:text-[#2176C1]"
                    }`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-3 mt-4" role="tablist" aria-label="Industry carousel indicators">
          {industryData.map((industry, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              onClick={() => {
                setCurrentIndex(index);
                setSelectedFeature(null); // Reset feature selection when changing industry
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#2176C1] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              role="tab"
              aria-label={`${industry.title} industry`}
              aria-selected={index === currentIndex}
              aria-controls={`industry-${index}-tab`}
              id={`industry-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;