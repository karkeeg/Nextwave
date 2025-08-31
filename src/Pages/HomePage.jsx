import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiOpenai, SiTensorflow, SiReact, SiNextdotjs, SiAmazon, SiNodedotjs,
  SiPython, SiMongodb, SiDjango, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiGooglecloud, SiTypescript, SiJavascript, SiTailwindcss,
  SiDocker, SiKubernetes, SiPostgresql, SiGithubactions, SiGit,
  SiNumpy, SiPandas, SiJupyter, SiAnaconda, SiHuggingface, SiApacheairflow, SiMlflow
} from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
// Import your actual components - replace these paths with your actual component paths
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials"; 
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import IndustryServed from "../Components/IndustryServed";
import RobotMosaic from "../Components/RobotMosaic";

// ✅ Responsive Rolling Words Component
const RollingWords = ({ words, interval = 3000, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 800);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  const currentWord = words[index];
  const nextWord = words[(index + 1) % words.length];

  // Calculate responsive width based on word length and screen size
  const maxWordLength = Math.max(...words.map(word => word.length));
  const baseWidth = maxWordLength * 30; // Increased base character width
  
  return (
    <span 
      className={`inline-block relative overflow-visible ${className}`} 
      style={{ 
        minWidth: `${baseWidth}px`,
        maxWidth: "100%",
        height: "0.7em",
        perspective: "1000px"
      }}
    >
      {/* Current word with 3D cylinder roll effect */}
      <motion.span
        key={`current-${currentWord}`}
        initial={{ rotateX: 0, y: 0, opacity: 1 }}
        animate={{ 
          rotateX: isAnimating ? 90 : 0,
          y: isAnimating ? "-0.5em" : 0, // Use em for responsive movement
          opacity: isAnimating ? 1 : 1
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
        className="absolute inset-0 text-[#2176C1] font-black flex items-center justify-center text-center w-full"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          fontSize: "inherit", // Inherit font size from parent
          lineHeight: "1.1"
        }}
      >
        {currentWord}
      </motion.span>
      
      {/* Next word rolling in from bottom */}
      <motion.span
        key={`next-${nextWord}`}
        initial={{ rotateX: -90, y: "0.5em", opacity: 0 }}
        animate={{ 
          rotateX: isAnimating ? 0 : -90,
          y: isAnimating ? 0 : "0.5em",
          opacity: isAnimating ? 1 : 0
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: isAnimating ? 0.1 : 0,
          type: "tween"
        }}
        className="absolute inset-0 text-[#2176C1] font-black flex items-center justify-center text-center w-full"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          fontSize: "inherit",
          lineHeight: "1.1"
        }}
      >
        {nextWord}
      </motion.span>
    </span>
  );
};

// ✅ Animated Text Component
const AnimatedText = ({ children, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.h1>
  );
};
// ✅ Responsive Icon Marquee Component
const IconMarquee = () => {
  const [tip, setTip] = React.useState({ show: false, x: 0, y: 0, label: "" });
  const showTip = (label, e) => setTip({ show: true, x: e.clientX, y: e.clientY + 18, label });
  const moveTip = (e) => setTip((t) => ({ ...t, x: e.clientX, y: e.clientY + 18 }));
  const hideTip = () => setTip((t) => ({ ...t, show: false }));

  // Responsive icon size
  const icons = [
    { key: "openai", label: "OpenAI", node: <SiOpenai className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "tf", label: "TensorFlow", node: <SiTensorflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "pt", label: "PyTorch", node: <SiPytorch className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "keras", label: "Keras", node: <SiKeras className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "sk", label: "scikit-learn", node: <SiScikitlearn className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "cv", label: "OpenCV", node: <SiOpencv className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "hf", label: "Hugging Face", node: <SiHuggingface className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "numpy", label: "NumPy", node: <SiNumpy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "pandas", label: "Pandas", node: <SiPandas className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "jupyter", label: "Jupyter", node: <SiJupyter className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "anaconda", label: "Anaconda", node: <SiAnaconda className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "airflow", label: "Apache Airflow", node: <SiApacheairflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "mlflow", label: "MLflow", node: <SiMlflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "py", label: "Python", node: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "aws", label: "AWS", node: <SiAmazon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "gcp", label: "Google Cloud", node: <SiGooglecloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "react", label: "React", node: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "next", label: "Next.js", node: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "node", label: "Node.js", node: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "django", label: "Django", node: <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "ts", label: "TypeScript", node: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "js", label: "JavaScript", node: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "tw", label: "Tailwind CSS", node: <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "mongo", label: "MongoDB", node: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "pg", label: "PostgreSQL", node: <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "docker", label: "Docker", node: <SiDocker className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "k8s", label: "Kubernetes", node: <SiKubernetes className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "gha", label: "GitHub Actions", node: <SiGithubactions className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { key: "awsa", label: "AWS Amplify", node: <SiAwsamplify className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  ];

  const strip = [...icons, ...icons, ...icons];

  return (
    <div className="w-full">
      <div className="mx-0">
        <div className="overflow-hidden py-2 sm:py-3 md:py-4 bg-transparent">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-28 animate-marquee" style={{ width: "max-content" }}>
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
        {tip.show && (
          <div
            style={{ position: "fixed", left: tip.x, top: tip.y, zIndex: 10000 }}
            className="pointer-events-none px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap shadow-lg"
          >
            {tip.label}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
        @media (min-width: 768px) {
          .animate-marquee { animation: marquee 80s linear infinite; }
        }
        @media (min-width: 1024px) {
          .animate-marquee { animation: marquee 100s linear infinite; }
        }
      `}</style>
    </div>
  );
};

// ✅ Responsive Hero headline - matching the image layout exactly
const ResponsiveHeroHeadline = () => (
  <div className="flex flex-col items-center lg:items-start">
    {/* Mobile layout - separate lines */}
    <div className="flex flex-col items-center lg:hidden space-y-1">
      <div className="flex items-center">
        <RollingWords 
          words={["Empower", "Enhance"]} 
          className="text-3xl sm:text-3xl md:text-4xl font-black"
        />
        <div className="text-3xl ml-[-35px] sm:text-3xl md:text-4xl font-extrabold text-slate-800 ml-1">
          Your Business
        </div>
      </div>
{/*       
      <div className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
        Business
      </div> */}
      
      <div className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
        with Next-Gen AI &
      </div>
      
      <RollingWords 
        words={["Automation", "Innovation"]} 
        className="text-3xl sm:text-3xl md:text-4xl font-black"
      />
    </div>
    
    {/* Desktop layout - exact match to the image */}
    <div className="hidden lg:flex flex-col items-start space-y-0">
      {/* First line: "Your" and rolling word on the same line */}
      <div className="flex items-baseline">
        <RollingWords 
          words={["Empower", "Enhance"]} 
          className="text-5xl xl:text-7xl ml-12 mr-12 font-black "
        />
        <div className="text-4xl xl:text-7xl font-extrabold text-slate-800">
        Your 
      </div>
      </div>
            
      {/* Third line: "with Next-Gen AI &" */}
      <div className="text-5xl xl:text-7xl font-extrabold text-slate-800">
        Business with 
      </div>
      <div className="text-5xl xl:text-7xl font-extrabold text-slate-800">
        Next-Gen AI &
      </div>
      
      {/* Fourth line: Rolling words */}
      <RollingWords 
        words={["Automation", "Innovations"]} 
        className="text-5xl xl:text-7xl ml-6 font-black"
      />
    </div>
  </div>
);

const HERO_SUB = "AI chatbots, scalable backends and automation tailored for your growth.";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const sectionRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);
  const heroParallaxRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroParallaxRef,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(heroProgress, [0, 1], [10, -10]);
  const yRight = useTransform(heroProgress, [0, 1], [20, -20]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Check if we're in the hero section (first 100vh)
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsInHeroSection(currentScrollY < heroHeight * 0.8); // 80% of hero section height
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    Object.values(sectionRefs.current).forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const addRef = (id, ref) => { sectionRefs.current[id] = ref; };
  const isVisible = (id) => visibleElements.has(id);

  const scrollProgress =
    typeof window !== "undefined"
      ? (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      : 0;

  const scrollToSection = (sectionId) => {
    const headerOffset = 80;
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || window.pageYOffset) + rect.top - headerOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <motion.main
      className="w-full bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Progress bar */}
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
        className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[620px] lg:h-[780px] bg-[#c4d4f5] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
      >
        <div ref={heroParallaxRef}>
          <motion.div
            className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-9xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-between mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-36 md:scale-105 opacity-90"
            initial="hidden"
            animate="show"
            variants={fadeInUp}
          >
            {/* Left Column - Text Content */}
            <motion.div 
              style={{ y: yLeft }} 
              className="flex-[1.3] min-w-0 w-full max-w-6xl flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            >
              <AnimatedText className="leading-tight mb-1 sm:mb-2 md:mb-3 lg:mb-5">
                <ResponsiveHeroHeadline />
              </AnimatedText>
              
              <motion.p 
                className="text-xl sm:text-xl md:text-xl lg:text-xl text-slate-600 mb-4 sm:mb-5 md:mb-5 lg:mb-6 font-medium max-w-xl leading-relaxed px-2 sm:px-0"
                variants={fadeInUp}
              >
                {HERO_SUB}
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.2 }}
                className="flex justify-center lg:justify-start w-full sm:w-auto"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#c4d4f5] text-[#2176C1] font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3.5 rounded-lg border-2 border-[#2176C1] shadow hover:bg-[#2176C1] hover:text-white hover:scale-105 transition-all duration-300 text-lg sm:text-lg md:text-xl w-full sm:w-auto max-w-xs sm:max-w-none"
                >
                  Request a Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Robot Mosaic */}
            <motion.div 
              style={{ y: yRight }} 
              className="flex-[0.7] w-full flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
            >
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:w-[520px] xl:max-w-full shrink-0">
                <RobotMosaic />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Responsive Icon Marquee */}
        <div
          className="relative z-10 mt-8 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 w-full"
          style={{
            width: "calc(100vw - 8px)",
            marginLeft: "calc(50% - 50vw + 4px)",
            marginRight: "calc(50% - 50vw + 4px)",
          }}
        >
          <IconMarquee />
        </div>
      </section>

      {/* Sections */}
      {[
        ["services", <Services />],
        ["industries", <IndustryServed />],
        ["research", <Blog />],
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

      {/* Responsive Scroll To Top - Disabled in hero section */}
      <div
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 transition-all duration-300 hover:scale-110"
        style={{
          opacity: (visibleElements.size > 2 && !isInHeroSection) ? 1 : 0,
          transform: `translateY(${(visibleElements.size > 2 && !isInHeroSection) ? 0 : 20}px)`,
          pointerEvents: isInHeroSection ? 'none' : 'auto'
        }}
      >
        <button
          className="bg-[#2176C1] text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:rotate-12 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          disabled={isInHeroSection}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </motion.main>
  );
};

export default HomePage;