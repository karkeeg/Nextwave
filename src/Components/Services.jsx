import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaBrain, FaComments, FaLanguage, FaArrowRight, FaPlay, FaCode, FaDatabase, FaGlobe, FaMobileAlt } from "react-icons/fa";

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
    lightColor: "from-blue-100 to-purple-100",
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
    lightColor: "from-green-100 to-teal-100",
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
    lightColor: "from-orange-100 to-red-100",
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
    lightColor: "from-purple-100 to-pink-100",
    bgColor: "bg-purple-50"
  },
  {
    id: "web-dev",
    title: "Website Development",
    desc: "Modern, performant websites using React/Next.js, optimized for SEO, accessibility, and speed.",
    features: [
      "Responsive UI with Tailwind CSS",
      "SEO and Core Web Vitals optimization",
      "CMS and API integrations",
    ],
    icon: <FaGlobe size={24} />,
    image: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=2069&auto=format&fit=crop",
    color: "from-cyan-500 to-blue-600",
    lightColor: "from-cyan-100 to-blue-100",
    bgColor: "bg-cyan-50"
  },
  {
    id: "app-dev",
    title: "App Development",
    desc: "Cross-platform mobile apps with React Native and robust backends tailored to your business.",
    features: [
      "iOS and Android with one codebase",
      "Offline-first and push notifications",
      "Secure auth and scalable APIs",
    ],
    icon: <FaMobileAlt size={24} />,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2069&auto=format&fit=crop",
    color: "from-rose-500 to-orange-500",
    lightColor: "from-rose-100 to-orange-100",
    bgColor: "bg-rose-50"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);
  const listRef = useRef(null);
  const middleRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [itemMetrics, setItemMetrics] = useState({ top: 0, step: 64, height: 86, trackTop: 0, trackHeight: 0 });

  // Measure the list and compute a full-height center track that matches tallest column
  useLayoutEffect(() => {
    const measure = () => {
      if (!listRef.current || !middleRef.current) return;
      const items = Array.from(listRef.current.querySelectorAll('[data-service-item="true"]'));
      if (!items.length) return;
      const first = items[0].getBoundingClientRect();
      const second = items[1] ? items[1].getBoundingClientRect() : null;
      const last = items[items.length - 1].getBoundingClientRect();
      const middleRect = middleRef.current.getBoundingClientRect();
      // Determine full track height from tallest column
      const leftRect = leftPanelRef.current ? leftPanelRef.current.getBoundingClientRect() : { height: 0 };
      const rightRect = rightPanelRef.current ? rightPanelRef.current.getBoundingClientRect() : { height: 0 };
      const trackTop = 0; // start from top of middle column
      const trackHeight = Math.max(middleRect.height, leftRect.height, rightRect.height);
      const height = first.height;
      const step = second ? second.top - first.top : height + 16; // include gap if any
      setItemMetrics({ top: trackTop, step, height, trackTop, trackHeight });
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, { passive: true });
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, []);

  // Derived positions for indicator within the track (equal segments across services)
  const segments = Math.max(1, services.length);
  const indicatorHeight = itemMetrics.trackHeight > 0 ? itemMetrics.trackHeight / segments : 0;
  const maxYWithinTrack = Math.max(0, itemMetrics.trackHeight - indicatorHeight);
  const indicatorY = itemMetrics.trackTop + Math.min(selectedService * indicatorHeight, maxYWithinTrack);

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
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
    <section className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-14">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized technical solutions that power modern businesses with cutting-edge AI and machine learning technology.
          </p> */}
        </motion.div>

        {/* Main Content: Left list | Middle divider | Right details */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_16px_1.2fr] gap-4 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Services list */}
          <motion.div ref={leftPanelRef} className="bg-white/60 rounded-2xl p-4 md:p-5 shadow-sm" variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-6xl font-extrabold text-slate-900">Our Services</h2>
              <p className="text-slate-600 mt-2">Specialized technical solutions that power modern businesses with cutting-edge technology.</p>
            </div>
            <ul ref={listRef} className="space-y-3 relative">
              {services.map((s, idx) => (
                <li key={s.id} data-service-item="true">
                  <button
                    className={`group w-full flex items-center gap-4 rounded-xl px-3 py-2 text-left transition-colors ${
                      idx === selectedService
                        ? `bg-gradient-to-r ${s.lightColor}`
                        : "bg-white hover:bg-slate-50"
                    }`}
                    onClick={() => setSelectedService(idx)}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                      idx === selectedService ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}>{idx + 1}</span>
                    <span className="font-semibold text-slate-900">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle: vertical divider with animated indicator */}
          <div className="hidden lg:flex items-stretch min-h-full" ref={middleRef}>
            <div className="relative h-full min-h-full w-full">
              {/* Light full-height track */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[10px] rounded-full"
                style={{ background: "rgba(37, 99, 235, 0.20)", top: itemMetrics.trackTop, height: itemMetrics.trackHeight }}
              />
              <motion.div
                className="absolute left-1/4 -translate-x-1/2 w-[8px] rounded-full shadow-sm"
                style={{
                  height: indicatorHeight,
                  background: "linear-gradient(180deg, rgba(37, 99, 235, 0.20) 0%, #2563EB 100%)",
                }}
                animate={{ y: indicatorY }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            </div>
          </div>

          {/* Right: Details panel */}
          <motion.div ref={rightPanelRef} className="space-y-4" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${currentService.color} flex items-center justify-center text-white shadow-lg`}>
                    {currentService.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{currentService.title}</h3>
                </div>

                <p className="text-slate-700 text-lg">{currentService.desc}</p>

                <ol className="space-y-2">
                  {currentService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center bg-gradient-to-r ${currentService.color}`}>{i + 1}</span>
                      <span className="text-slate-800">{f}</span>
                    </li>
                  ))}
                </ol>

                <button
                  onClick={() => handleServiceClick(currentService.id)}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
                >
                  Learn more
                  <FaArrowRight />
                </button>

                <div className="mt-2">
                  <div className="relative h-[300px]">
                    <motion.img
                      key={currentService.image}
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute -right-4 -top-4 bg-gray-200 rounded-xl shadow p-3 border border-slate-100"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-slate-600">Accuracy</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Section */}
        {/* <motion.div 
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
