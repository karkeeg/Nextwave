import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import  testimonials  from '../data/testimonials';
import { Helmet } from 'react-helmet-async';

const TestimonialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id) || 0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Validate index
  const isValidIndex = Number.isInteger(currentIndex) && currentIndex >= 0 && currentIndex < testimonials.length;
  const testimonial = isValidIndex ? testimonials[currentIndex] : null;
  const otherTestimonials = isValidIndex
  ? testimonials
      .map((testimonial, i) => ({ ...testimonial, originalIndex: i }))
      .filter((_, i) => i !== currentIndex)
  : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update document title when testimonial changes
    if (testimonial) {
      document.title = `${testimonial.name}'s Testimonial | NextWave AI`;
    } else {
      document.title = 'Testimonial | NextWave AI';
    }
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'NextWave AI';
    };
  }, [currentIndex, testimonial]);

  const navigateToTestimonial = (index) => {
    setCurrentIndex(index);
    navigate(`/testimonial/${index}`, { replace: true });
  };

  const navigateUp = () => {
    if (activeSlide > 0) {
      setActiveSlide(prev => prev - 1);
    }
  };

  const navigateDown = () => {
    if (activeSlide < otherTestimonials.length - 1) {
      setActiveSlide(prev => prev + 1);
    }
  };

  const handleBackToTestimonials=()=>{
     navigate("/");
    setTimeout(() => {
      const testimonailsSection = document.getElementById("testimonials");
      if (testimonailsSection) {
        testimonailsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  const visibleTestimonials = otherTestimonials.slice(activeSlide, activeSlide + 3);

  // Fallback if testimonial not found
  if (!testimonial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Testimonial Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-[#2176C1] text-white rounded hover:bg-[#185a96]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{testimonial.name} {testimonial.title} | NextWave AI - Testimonial</title>
        <meta name="description" content={testimonial.text} />
        <meta name="keywords" content={`Testimonial, ${testimonial.name}, ${testimonial.company}, AI, Technology, NextWave AI`} />
        <link rel="canonical" href={`https://nextwaveai-8.vercel.app/testimonials/${currentIndex}`} />
      </Helmet>
    
    <div className="min-h-screen bg-gradient-to-b from-[#FAFBFC] to-[#F0F9FF] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => handleBackToTestimonials()}
          className="flex items-center text-[#2176C1] hover:text-[#185a96] mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Testimonials
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Testimonial */}
          <motion.div 
            className="flex-1 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-[#2176C1] mb-2">{testimonial.name}</h1>
                <p className="text-lg text-gray-600 mb-1">{testimonial.title}</p>
                <p className="text-[#FFC043] font-medium mb-3">{testimonial.company}</p>
                
              </div>
            </div>

            <div className="relative bg-gray-50 rounded-xl p-8">
              <FaQuoteLeft className="text-[#2176C1]/20 text-5xl absolute -top-2 -left-2" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar with other testimonials */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">More Testimonials</h2>
              
              <div className="relative">
                {/* Navigation Arrows */}
                <button 
                  onClick={navigateUp}
                  disabled={activeSlide === 0}
                  className={`absolute -top-8 right-10 p-1 ${activeSlide === 0 ? 'text-gray-300' : 'text-[#2176C1] hover:text-[#185a96]'}`}
                  aria-label="Previous testimonial"
                >
                  <FaChevronUp className="w-5 h-5" />
                </button>
                <button 
                  onClick={navigateDown}
                  disabled={activeSlide >= otherTestimonials.length - 3}
                  className={`absolute -top-8 right-2 p-1 ${activeSlide >= otherTestimonials.length - 3 ? 'text-gray-300' : 'text-[#2176C1] hover:text-[#185a96]'}`}
                  aria-label="Next testimonial"
                >
                  <FaChevronDown className="w-5 h-5" />
                </button>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  <AnimatePresence initial={false}>
                    {visibleTestimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.originalIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigateToTestimonial(testimonial.originalIndex)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${currentIndex === testimonial.originalIndex ? 'border-[#2176C1] bg-blue-50' : 'border-gray-200 hover:border-[#2176C1]/50 hover:bg-blue-50/50'}`}
                      >
                        <div className="flex items-start gap-3">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          />
                          <div>
                            <h3 className="font-medium text-[#2176C1]">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">{testimonial.title}</p>
                            <p className="text-xs text-gray-500 line-clamp-2">"{testimonial.text}"</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TestimonialDetail;
