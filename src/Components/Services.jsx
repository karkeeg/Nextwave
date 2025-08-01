import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaBrain, FaComments, FaLanguage, FaRobot, FaArrowRight, FaPlay, FaCode, FaDatabase } from "react-icons/fa";

const services = [
  {
    id: "machine-learning",
    title: "Machine Learning Engineering",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaBrain size={24} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaLanguage size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50"
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    desc: "Transform raw data into actionable insights with our comprehensive data science and analytics solutions.",
    features: [
      "Predictive modeling and statistical analysis",
      "Real-time data visualization and dashboards",
      "Big data processing and machine learning pipelines",
    ],
    icon: <FaChartLine size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "ai-chat",
    title: "AI Chat Development",
    desc: "Build intelligent conversational AI that understands, learns, and provides exceptional user experiences.",
    features: [
      "Multi-platform chatbot development",
      "Voice recognition and speech synthesis",
      "Integration with existing business systems",
    ],
    icon: <FaComments size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // Auto-rotate services with longer timeout and pause functionality
  useEffect(() => {
    if (isPaused || !autoplayEnabled) return; // Don't auto-rotate when paused or autoplay disabled
    
    const interval = setInterval(() => {
      setSelectedService((prev) => (prev + 1) % services.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [isPaused, autoplayEnabled]);

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  const toggleAutoplay = () => {
    setAutoplayEnabled(!autoplayEnabled);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const currentService = services[selectedService];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized technical solutions that power modern businesses with cutting-edge AI and machine learning technology.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 items-center h-[450px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Content Block */}
          <motion.div 
            className="h-full flex flex-col justify-center"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-center space-y-6"
              >
                {/* Service Icon and Title */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentService.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {currentService.icon}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {currentService.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed h-16 flex items-center">
                  {currentService.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 h-32">
                  {currentService.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentService.color} flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0`}>
                        {idx + 1}
                      </div>
                      <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleServiceClick(currentService.id)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Service Navigation Dots with Autoplay Toggle */}
            <div className="flex flex-col items-center gap-4 mt-8">
              {/* Autoplay Toggle Button */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-sm text-gray-600">Autoplay:</span>
                <motion.button
                  onClick={toggleAutoplay}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                    autoplayEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      autoplayEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </motion.button>
                <span className="text-sm text-gray-600 min-w-[60px] text-left">
                  {autoplayEnabled ? 'ON' : 'OFF'}
                </span>
              </motion.div>
              
              {/* Navigation Dots */}
              <div className="flex gap-3">
                {services.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === selectedService 
                        ? `bg-gradient-to-r ${currentService.color}` 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content Block - Interactive Demo */}
          <motion.div 
            className="relative h-full flex items-center"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[450px]"
              >
                {/* Main Image */}
                <div className="relative group cursor-pointer h-full" onClick={() => handleServiceClick(currentService.id)}>
                  <motion.img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay with Play Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-3xl flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaPlay className="text-blue-600 text-xl ml-1" />
                    </motion.div>
                  </div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-gray-800">Live Demo</div>
                    <div className="text-sm text-gray-600">Click to explore</div>
                    <motion.button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Projects Completed", icon: <FaCode /> },
            { number: "50+", label: "Expert Team", icon: <FaBrain /> },
            { number: "99.9%", label: "Uptime", icon: <FaDatabase /> },
            { number: "24/7", label: "Support", icon: <FaComments /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center hover:bg-blue-400  cursor-pointer p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
