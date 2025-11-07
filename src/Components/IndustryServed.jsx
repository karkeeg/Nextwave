import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import industriesData from "../data/industyData";

const IndustryServed = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Convert the industries object to an array
  const industriesArray = Object.values(industriesData);
  const hasIndustries = industriesArray.length > 0;

  const handlePrev = () => {
    if (!hasIndustries) return;
    setCurrentIndex((prev) =>
      prev === 0 ? industriesArray.length - 1 : prev - 1
    );
    setSelectedFeature(null);
  };

  const handleNext = () => {
    if (!hasIndustries) return;
    setCurrentIndex((prev) =>
      prev === industriesArray.length - 1 ? 0 : prev + 1
    );
    setSelectedFeature(null);
  };

  const goToIndustry = (index) => {
    setCurrentIndex(index);
    setSelectedFeature(null);
  };

  const handleIndustryClick = (industryId) => {
    navigate(`/industries/${industryId}`);
  };

  const handleFeatureSelect = (industryId, feature) => {
    setSelectedFeature(feature);
    console.log(`Selected feature: ${feature} for industry: ${industryId}`);
  };

  useEffect(() => {
    if (!hasIndustries) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, hasIndustries]);

  // Safe destructuring with fallback values
  const currentIndustry = hasIndustries ? industriesArray[currentIndex] : null;
  const {
    id = "",
    title = "",
    images = [],
    featuresList = [],
  } = currentIndustry || {};

  // Return early if no industries data
  if (!hasIndustries) {
    return (
      <section className="w-full min-h-screen px-4 pt-14 mb-20 flex flex-col items-center">
        <h2 className="text-center">Industries Served</h2>
        <p className="text-center">No industry data available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen px-4 pt-14 mb-20 flex flex-col items-center">
      <h2 className="text-center">Industries Served</h2>
      <p className="text-center">
        Specialized technical solutions and power modern businesses with
        cutting-edge technology.
      </p>

      {/* Tab indicators - Fixed ARIA structure */}
      <div
        className="flex justify-center items-center gap-3 mt-4"
        role="tablist"
        aria-label="Industry carousel indicators"
      >
        {industriesArray.map((industry, index) => (
          <button
            key={industry.id}
            role="tab"
            aria-selected={currentIndex === index}
            aria-controls={`industry-${index}-tab`}
            id={`industry-${index}-tab-btn`}
            onClick={() => goToIndustry(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-[#2176C1]" : "bg-gray-300"
            }`}
          >
            <span className="sr-only">{industry.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-6xl bg-[#F4F8FE] rounded-xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center relative overflow-hidden mt-2">
        {/* Navigation buttons */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handlePrev}
          aria-label="Previous industry"
          disabled={!hasIndustries}
        >
          <FaChevronLeft size={24} aria-hidden="true" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-[#2176C1] p-2 rounded-full hover:bg-[#E9EDF2] transition z-10"
          onClick={handleNext}
          aria-label="Next industry"
          disabled={!hasIndustries}
        >
          <FaChevronRight size={24} aria-hidden="true" />
        </button>

        {/* Tabpanel content */}
        <div
          id={`industry-${currentIndex}-tab`}
          role="tabpanel"
          aria-labelledby={`industry-${currentIndex}-tab-btn`}
          tabIndex={0}
          className="w-full"
        >
          <AnimatePresence mode="wait">
            {/* Industry images - single on mobile, multiple on desktop */}
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
                
                // Only show the center image on mobile, all on larger screens
                const isVisibleOnMobile = window.innerWidth < 768 ? isCenter : true;
                
                return isVisibleOnMobile && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    onClick={() => handleIndustryClick(id)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative w-full max-w-xs mx-auto md:mx-0 md:w-40 lg:w-62 xl:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out ${window.innerWidth >= 768 ? scale : 'scale-100'}`}
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

            {/* Title with fade animation */}
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

            {/* Features with fade animation, centered layout, and radio buttons */}
            <motion.div
              key={title + "-features"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8 text-center"
            >
              {featuresList.map((column, idx) => (
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
                      <span
                        className={`transition-colors text-left ${
                          selectedFeature === feature
                            ? "text-[#2176C1] font-semibold"
                            : "text-[#1E93AB] group-hover:text-[#2176C1]"
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;
