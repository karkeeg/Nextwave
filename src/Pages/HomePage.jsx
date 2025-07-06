import React, { useEffect, useState, useRef } from "react";
import HomepageData from "../Components/HomepageData";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import IndustryServed from "../Components/IndustryServed";
import AboutPage from "./AboutPage";

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

const HomePage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRefs = useRef({});
  const [slide, setSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");

  // Fade out on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for fade-in
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

  return (
    <main className="w-full bg-white font-['Inter']">
      {/* Hero Section */}
      <section
        ref={(ref) => addRef("hero", ref)}
        id="hero"
        className="relative w-full h-[700px] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-32 py-16 md:py-24 overflow-hidden"
      >
        {/* Background Image Slider + Fade & Transform */}
        <div
          className="absolute inset-0 z-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: scrollDir === "down" && scrollY > 100 ? 0.3 : 1,
            transform:
              scrollDir === "down" && scrollY > 100
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <span className="absolute top-10 left-10 w-32 h-32 bg-[#FFC043] opacity-20 rounded-full animate-float-slow" />
          <span className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#2176C1] opacity-15 rounded-full animate-float" />
          <span className="absolute bottom-10 right-20 w-24 h-24 bg-[#4ECDC4] opacity-20 rounded-full animate-float-reverse" />
          <span className="absolute top-1/3 right-10 w-20 h-20 bg-[#FF6B6B] opacity-10 rounded-full animate-float" />
          <span className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-[#A3E4D7] opacity-15 rounded-full animate-float-reverse" />
        </div>

        {/* Hero Content (text + video) */}
        <div
          className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto gap-12"
          style={{
            opacity: scrollDir === "down" && scrollY > 100 ? 0.25 : 1,
            transform:
              scrollDir === "down" && scrollY > 100
                ? "translateY(-20px)"
                : "translateY(0px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Left: Headline + Buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
              {heroSlides[slide].headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-xl">
              {heroSlides[slide].subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
              <button className="bg-[#2176C1] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#185a96] hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
                Get Started Free
              </button>
              <button className="bg-white text-[#2176C1] font-semibold px-8 py-4 rounded-lg border-2 border-[#2176C1] shadow hover:bg-[#2176C1] hover:text-white hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
                Request a Demo
              </button>
            </div>

            {/* Dots */}
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

          {/* Right: Video */}
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
        </div>
      </section>

      {/* Remaining sections */}
      <section
        ref={(ref) => addRef("data", ref)}
        id="data"
        className={`transition-all duration-1000 ease-out ${
          isVisible("data")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <HomepageData />
      </section>

      <section
        ref={(ref) => addRef("about", ref)}
        id="about"
        className={`transition-all duration-1000 ease-out ${
          isVisible("about")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <AboutPage />
      </section>

      <section
        ref={(ref) => addRef("services", ref)}
        id="services"
        className={`transition-all duration-1000 ease-out ${
          isVisible("services")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Services />
      </section>

      <section
        ref={(ref) => addRef("industries", ref)}
        id="industries"
        className={`transition-all duration-1000 ease-out ${
          isVisible("industries")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <IndustryServed />
      </section>

      <section
        ref={(ref) => addRef("research", ref)}
        id="research"
        className={`transition-all duration-1000 ease-out ${
          isVisible("research")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Blog />
      </section>

      <section
        ref={(ref) => addRef("testimonials", ref)}
        id="testimonials"
        className={`transition-all duration-1000 ease-out ${
          isVisible("testimonials")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Testimonials />
      </section>

      <section
        ref={(ref) => addRef("faqs", ref)}
        id="faqs"
        className={`transition-all duration-1000 ease-out ${
          isVisible("faqs")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <FAQs />
      </section>

      <section
        ref={(ref) => addRef("contact", ref)}
        id="contact"
        className={`transition-all duration-1000 ease-out ${
          isVisible("contact")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Contact />
      </section>

      {/* Scroll to Top Button */}
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
    </main>
  );
};

export default HomePage;
