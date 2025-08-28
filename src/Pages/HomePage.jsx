import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  SiOpenai, SiTensorflow, SiReact, SiNextdotjs, SiAmazon, SiNodedotjs,
  SiPython, SiMongodb, SiDjango, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiGooglecloud, SiTypescript, SiJavascript, SiTailwindcss,
  SiDocker, SiKubernetes, SiPostgresql, SiGithubactions, SiGit,
  SiNumpy, SiPandas, SiJupyter, SiAnaconda, SiHuggingface, SiApacheairflow, SiMlflow
} from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import HomepageData from "../Components/HomepageData";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import IndustryServed from "../Components/IndustryServed";
import AboutPage from "./AboutPage";
import ProjectGallery from "../Components/ProjectGallery";
import RobotMosaic from "../Components/RobotMosaic";

// Icon Marquee component with seamless infinite loop
const IconMarquee = () => {
  const size = 48; // Increased from 34 to 42
  const [tip, setTip] = React.useState({ show: false, x: 0, y: 0, label: "" });
  const showTip = (label, e) => {
    setTip({ show: true, x: e.clientX, y: e.clientY + 18, label });
  };
  const moveTip = (e) => {
    setTip((t) => ({ ...t, x: e.clientX, y: e.clientY + 18 }));
  };
  const hideTip = () => setTip((t) => ({ ...t, show: false }));
  const icons = [
    // AI/ML stack
    { key: "openai", label: "OpenAI", node: <SiOpenai size={size} /> },
    { key: "tf", label: "TensorFlow", node: <SiTensorflow size={size} /> },
    { key: "pt", label: "PyTorch", node: <SiPytorch size={size} /> },
    { key: "keras", label: "Keras", node: <SiKeras size={size} /> },
    { key: "sk", label: "scikit-learn", node: <SiScikitlearn size={size} /> },
    { key: "cv", label: "OpenCV", node: <SiOpencv size={size} /> },
    { key: "hf", label: "Hugging Face", node: <SiHuggingface size={size} /> },
    { key: "numpy", label: "NumPy", node: <SiNumpy size={size} /> },
    { key: "pandas", label: "Pandas", node: <SiPandas size={size} /> },
    { key: "jupyter", label: "Jupyter", node: <SiJupyter size={size} /> },
    { key: "anaconda", label: "Anaconda", node: <SiAnaconda size={size} /> },
    { key: "airflow", label: "Apache Airflow", node: <SiApacheairflow size={size} /> },
    { key: "mlflow", label: "MLflow", node: <SiMlflow size={size} /> },
    { key: "py", label: "Python", node: <SiPython size={size} /> },
    { key: "aws", label: "AWS", node: <SiAmazon size={size} /> },
    { key: "gcp", label: "Google Cloud", node: <SiGooglecloud size={size} /> },

    // Web/App development stack
    { key: "react", label: "React", node: <SiReact size={size} /> },
    { key: "next", label: "Next.js", node: <SiNextdotjs size={size} /> },
    { key: "node", label: "Node.js", node: <SiNodedotjs size={size} /> },
    { key: "django", label: "Django", node: <SiDjango size={size} /> },
    { key: "ts", label: "TypeScript", node: <SiTypescript size={size} /> },
    { key: "js", label: "JavaScript", node: <SiJavascript size={size} /> },
    { key: "tw", label: "Tailwind CSS", node: <SiTailwindcss size={size} /> },
    { key: "mongo", label: "MongoDB", node: <SiMongodb size={size} /> },
    { key: "pg", label: "PostgreSQL", node: <SiPostgresql size={size} /> },
    { key: "docker", label: "Docker", node: <SiDocker size={size} /> },
    { key: "k8s", label: "Kubernetes", node: <SiKubernetes size={size} /> },
    { key: "gha", label: "GitHub Actions", node: <SiGithubactions size={size} /> },
    { key: "awsa", label: "AWS Amplify", node: <SiAwsamplify size={size} /> },
  ];
  
  // Triple the icons for seamless infinite scroll
  const strip = [...icons, ...icons, ...icons];
  
  return (
    <div className="w-full">
      <div className="mx-0">
        <div className="overflow-hidden py-3 md:py-4 bg-transparent">
          <div 
            className="flex items-center gap-12 md:gap-28 animate-marquee"
            style={{
              width: 'max-content',
            }}
          >
            {strip.map((item, i) => (
              <div
                key={`${item.key}-${i}`}
                aria-label={item.label}
                className="text-slate-700 flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                onMouseEnter={(e) => showTip(item.label, e)}
                onMouseMove={moveTip}
                onMouseLeave={hideTip}
              >
                {item.node}
              </div>
            ))}
          </div>
        </div>
        {/* Fixed-position tooltip */}
        {tip.show && (
          <div
            style={{ position: "fixed", left: tip.x, top: tip.y, zIndex: 10000 }}
            className="pointer-events-none px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap shadow-lg"
          >
            {tip.label}
          </div>
        )}
      </div>

      {/* CSS for seamless marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        
        
      `}</style>
    </div>
  );
};

// Static hero copy
const HERO_HEADLINE = "Empower Your Business with Next-Gen AI & Automation";
const HERO_SUB = "AI chatbots, scalable backends and automation tailored for your growth.";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  const location = useLocation();
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);
  const heroParallaxRef = useRef(null);
  // Parallax only for the hero section
  const { scrollYProgress: heroProgress } = useScroll({ target: heroParallaxRef, offset: ["start end", "end start"] });
  const yLeft = useTransform(heroProgress, [0, 1], [10, -10]);
  const yRight = useTransform(heroProgress, [0, 1], [20, -20]);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section if hash or navigation state indicates a target
  useEffect(() => {
    const headerOffset = 80; // fixed header height approximation
    const scrollToId = (id) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || window.pageYOffset) + rect.top - headerOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    };

    // Prefer hash (e.g., /#services)
    if (location.hash) {
      scrollToId(location.hash.replace('#', ''));
      return;
    }
    // Or state-based navigation (navigate('/', { state: { scrollTo: 'services' } }))
    const stateTarget = location.state && location.state.scrollTo;
    if (stateTarget) {
      // small timeout to ensure sections are rendered
      setTimeout(() => scrollToId(stateTarget), 0);
    }
  }, [location]);

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
  const scrollProgress = typeof window !== 'undefined' 
    ? (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 
    : 0;

  return (
    <motion.main 
      className="w-full bg-white"
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
        ref={(node) => addRef("hero", node)}
        id="hero"
        className="relative w-full min-h-[620px] md:h-[780px] bg-[#c4d4f5] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-18 md:py-24 overflow-hidden"
      >
        {/* Background: requested gradient */}
        <div className="absolute inset-0 z-0" />

        {/* Animated Color Bubble (slow orbit) */}
        {/* <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full blur-2xl opacity-90 w-72 h-72 md:w-[420px] md:h-[420px]"
            style={{ background: "radial-gradient(closest-side, rgba(33,118,193,0.60), rgba(255,96,165,0.45), rgba(255,192,67,0.45))" }}
            initial={{ scale: 0.98, rotate: 0 }}
            animate={{ scale: [0.98, 1.04, 1], rotate: [0, 12, -8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div> */}

        {/* Hero Content */}
        <div ref={heroParallaxRef}>
        <motion.div
          className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto gap-8 md:gap-12 justify-between mt-12 sm:mt-16 md:mt-24 lg:mt-36 md:scale-105 opacity-90"
          initial="hidden"
          animate="show"
          variants={fadeInUp}
        >
          {/* Left column (constrained) */}
          <motion.div style={{ y: yLeft }} className="flex-1 min-w-0 max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-4 md:mb-6 px-2 sm:px-0">
              {HERO_HEADLINE}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 font-medium max-w-xl px-4 sm:px-0">
              {HERO_SUB}
            </p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className=" w-[40px] sm:w-auto justify-center lg:justify-start px-4 sm:px-0"
            >
              
              <button className="bg-[#c4d4f5] text-[#2176C1] font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg border-2 border-[#2176C1] shadow hover:bg-[#2176C1] hover:text-white hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                Request a Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Responsive robot mosaic with parallax */}
          <motion.div style={{ y: yRight }} className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[520px] lg:max-w-full shrink-0">
              <RobotMosaic />
            </div>
          </motion.div>
        </motion.div>
        </div>
        
        {/* Full-bleed Marquee with proper responsive margins */}
        <div
          className="relative z-10 mt-6 md:mt-10 lg:mt-12 w-full"
          style={{
            width: 'calc(100vw - 8px)',
            marginLeft: 'calc(50% - 50vw + 4px)',
            marginRight: 'calc(50% - 50vw + 4px)'
          }}
        >
          <IconMarquee />
        </div>
      </section>

      {/* Animated Sections */}
      {[
        ["services", <Services />],
        ["industries", <IndustryServed />],
        ["research", <Blog />],
        // ["projects", <ProjectGallery />],
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

      {/* Scroll to Top - Responsive positioning */}
      <div
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 transition-all duration-300 hover:scale-110"
        style={{
          opacity: visibleElements.size > 2 ? 1 : 0,
          transform: `translateY(${visibleElements.size > 2 ? 0 : 20}px)`,
        }}
      >
        <button
          className="bg-[#2176C1] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:rotate-12"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
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