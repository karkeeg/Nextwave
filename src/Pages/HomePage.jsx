import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import HomepageData from "../Components/HomepageData";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import IndustryServed from "../Components/IndustryServed";
import AboutPage from "./AboutPage";
import ProjectGallery from "../Components/ProjectGallery";

const heroSlides = [
  {
    bg: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80')",
    headline: "Empower Your Business with Next-Gen AI & Automation",
    subheadline:
      "Unlock growth and efficiency with intelligent chatbots, scalable backends, and automation solutions for every industry.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    bg: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
    headline: "Transform Ideas into Reality with Smart Technology",
    subheadline:
      "From education to healthcare, we deliver tailored digital solutions that drive results.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    bg: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80')",
    headline: "Build, Scale, and Succeed in the Digital Era",
    subheadline:
      "Experience seamless automation and AI-driven growth for your business.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const SLIDE_INTERVAL = 6000;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRefs = useRef({});
  const [slide, setSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const addRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  const isVisible = (id) => visibleElements.has(id);

  // Calculate scroll progress percentage
  const scrollProgress =
    (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  return (
    <motion.main 
      className="w-full bg-white font-['Inter']"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2,
        ease: "easeOut"
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          backgroundColor: "#2176C1",
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: "width 0.2s ease-out",
        }}
      />

      {/* Hero Section */}
      <section
        ref={(ref) => addRef("hero", ref)}
        id="hero"
        className="relative w-full h-[700px] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-32 py-16 md:py-24 overflow-hidden"
      >
        {/* Background Slider */}
        <div
          className="absolute inset-0 z-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: scrollY > 100 ? 0.3 : 1,
            transform:
              scrollY > 100
                ? "translateY(-30px) scale(1.02)"
                : "translateY(0px) scale(1)",
          }}
        >
          {heroSlides.map((slideData, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
                index === slide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: slideData.bg }}
            />
          ))}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Animated Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* ... you can keep your motion.spans here or static spans */}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto gap-12"
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          {/* Left */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
              {heroSlides[slide].headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-xl">
              {heroSlides[slide].subheadline}
            </p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start"
            >
              <button className="bg-[#2176C1] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#185a96] hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
                Get Started Free
              </button>
              <button className="bg-white text-[#2176C1] font-semibold px-8 py-4 rounded-lg border-2 border-[#2176C1] shadow hover:bg-[#2176C1] hover:text-white hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
                Request a Demo
              </button>
            </motion.div>
            <div className="flex gap-2 mt-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === slide ? "bg-[#FFC043]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex items-center justify-center w-full max-w-xl">
            <div className="bg-[#E9EDF2] rounded-2xl shadow-lg overflow-hidden w-full aspect-video max-w-2xl">
              <iframe
                className="w-full h-[400px] min-h-[300px]"
                src={heroSlides[slide].video}
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Animated Sections */}
      {[
       
        // ["about", <AboutPage />],
        ["services", <Services />],
        ["industries", <IndustryServed />],
        ["research", <Blog />],
        ["projects", <ProjectGallery />],
        ["testimonials", <Testimonials />],
        ["faqs", <FAQs />],
        ["contact", <Contact />],
      ].map(([id, component]) => (
        <motion.section
          key={id}
          ref={(ref) => addRef(id, ref)}
          id={id}
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible(id) ? "show" : "hidden"}
        >
          {component}
        </motion.section>
      ))}

      {/* Scroll to Top */}
      <div
        className="fixed bottom-8 right-8 z-50 transition-all duration-300 hover:scale-110"
        style={{
          opacity: visibleElements.size > 2 ? 1 : 0,
          transform: `translateY(${visibleElements.size > 2 ? 0 : 20}px)`,
        }}
      >
        <button
          className="bg-[#2176C1] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:rotate-12"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </motion.main>
  );
};

export default HomePage;
