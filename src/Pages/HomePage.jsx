import React, { useEffect, useState, useRef, Suspense } from "react";
import { useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  SiOpenai,
  SiTensorflow,
  SiReact,
  SiNextdotjs,
  SiAmazon,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDjango,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiGooglecloud,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiGithubactions,
  SiGit,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiAnaconda,
  SiHuggingface,
  SiApacheairflow,
  SiMlflow,
} from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import IndustryServed from "../Components/IndustryServed";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";

// ✅ Responsive Icon Marquee Component
const IconMarquee = () => {
  const [tip, setTip] = React.useState({ show: false, x: 0, y: 0, label: "" });
  const showTip = (label, e) =>
    setTip({ show: true, x: e.clientX, y: e.clientY + 18, label });
  const moveTip = (e) =>
    setTip((t) => ({ ...t, x: e.clientX, y: e.clientY + 18 }));
  const hideTip = () => setTip((t) => ({ ...t, show: false }));

  // Responsive icon size
  const icons = [
    {
      key: "openai",
      label: "OpenAI",
      node: <SiOpenai className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "tf",
      label: "TensorFlow",
      node: (
        <SiTensorflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "pt",
      label: "PyTorch",
      node: <SiPytorch className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "keras",
      label: "Keras",
      node: <SiKeras className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "sk",
      label: "scikit-learn",
      node: (
        <SiScikitlearn className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "cv",
      label: "OpenCV",
      node: <SiOpencv className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "hf",
      label: "Hugging Face",
      node: (
        <SiHuggingface className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "numpy",
      label: "NumPy",
      node: <SiNumpy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "pandas",
      label: "Pandas",
      node: <SiPandas className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "jupyter",
      label: "Jupyter",
      node: <SiJupyter className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "anaconda",
      label: "Anaconda",
      node: <SiAnaconda className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "airflow",
      label: "Apache Airflow",
      node: (
        <SiApacheairflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "mlflow",
      label: "MLflow",
      node: <SiMlflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "py",
      label: "Python",
      node: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "aws",
      label: "AWS",
      node: <SiAmazon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "gcp",
      label: "Google Cloud",
      node: (
        <SiGooglecloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "react",
      label: "React",
      node: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "next",
      label: "Next.js",
      node: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "node",
      label: "Node.js",
      node: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "django",
      label: "Django",
      node: <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "ts",
      label: "TypeScript",
      node: (
        <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "js",
      label: "JavaScript",
      node: (
        <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "tw",
      label: "Tailwind CSS",
      node: (
        <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "mongo",
      label: "MongoDB",
      node: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "pg",
      label: "PostgreSQL",
      node: (
        <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "docker",
      label: "Docker",
      node: <SiDocker className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "k8s",
      label: "Kubernetes",
      node: (
        <SiKubernetes className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "gha",
      label: "GitHub Actions",
      node: (
        <SiGithubactions className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "awsa",
      label: "AWS Amplify",
      node: (
        <SiAwsamplify className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
  ];

  const strip = [...icons, ...icons, ...icons];

  return (
    <div className="w-full">
      <div className="mx-0">
        <div className="overflow-hidden py-2 sm:py-3 md:py-4 bg-transparent">
          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-28 animate-marquee"
            style={{ width: "max-content" }}
            role="marquee"
            aria-label="Technology stack icons"
            aria-live="polite"
          >
            {strip.map((item, i) => {
              // Clone the icon node to add accessibility props
              const iconWithProps = React.cloneElement(item.node, {
                role: "img",
                "aria-hidden": "false",
                focusable: "false",
                "aria-label": item.label,
                title: item.label,
              });

              return (
                <div
                  key={`${item.key}-${i}`}
                  className="text-slate-700 flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                  onMouseEnter={(e) => showTip(item.label, e)}
                  onMouseMove={moveTip}
                  onMouseLeave={hideTip}
                  role="presentation"
                >
                  {iconWithProps}
                </div>
              );
            })}
          </div>
        </div>
        {tip.show && (
          <div
            style={{
              position: "fixed",
              left: tip.x,
              top: tip.y,
              zIndex: 10000,
            }}
            className="pointer-events-none px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap shadow-lg"
          >
            {tip.label}
          </div>
        )}
      </div>
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
          animation: marquee 60s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 80s linear infinite;
          }
        }
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 100s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  const location = useLocation();
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const sectionRefs = useRef({});
  const [scrollY, setScrollY] = useState(0);
  const heroParallaxRef = useRef(null);

  // Debug: Log navigation state
  useEffect(() => {
    console.log("HomePage mounted/updated");
    console.log("location.state:", location.state);
    console.log("scrollTo:", location.state?.scrollTo);
  }, [location.state]);

  // Combined scroll handling - navigation state OR scroll to top
  useEffect(() => {
    if (location.state?.scrollTo) {
      console.log("Navigation state detected:", location.state.scrollTo);

      // Handle navigation from other pages
      const scrollToSection = () => {
        const targetSection = document.getElementById(location.state.scrollTo);
        console.log("Target section:", targetSection);

        if (targetSection) {
          setTimeout(() => {
            const yOffset = -20; // Offset for spacing from top
            const y =
              targetSection.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

            console.log("Scrolling to position:", y);
            window.scrollTo({ top: y, behavior: "smooth" });

            // Clear the state after scrolling
            window.history.replaceState({}, document.title);
            console.log("Scroll complete, state cleared");
          }, 500);
        } else {
          console.warn("Target section not found!");
        }
      };

      // Wait for hero animation to complete
      if (heroAnimationComplete) {
        console.log("Hero animation complete, scrolling now");
        scrollToSection();
      } else {
        console.log("Waiting for hero animation...");
        const timer = setTimeout(() => {
          console.log("Timer fired, scrolling now");
          scrollToSection();
        }, 2600);
        return () => clearTimeout(timer);
      }
    } else {
      // No navigation state - scroll to top on page load/reload
      console.log("No navigation state, scrolling to top");
      window.scrollTo(0, 0);
    }
  }, [location.state, heroAnimationComplete]);

  useEffect(() => {
    document.title = "NextWave AI - Home";

    const timer = setTimeout(() => {
      setHeroAnimationComplete(true);
      console.log("Hero animation complete flag set");
    }, 2500);

    return () => {
      document.title = "NextWave AI";
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroParallaxRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsInHeroSection(currentScrollY < heroHeight * 1.2);
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
    Object.values(sectionRefs.current).forEach(
      (ref) => ref && observer.observe(ref)
    );
    return () => observer.disconnect();
  }, []);

  const addRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };
  const isVisible = (id) => visibleElements.has(id);

  const scrollProgress =
    typeof window !== "undefined"
      ? (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      : 0;

  return (
    <>
      <Helmet>
        <title>NextWave AI - Home</title>
        <meta
          name="description"
          content="NextWave AI - Empowering Your Business with Next-Gen AI & Automation Solutions. Transformative AI Chatbots, Scalable Backends, and Tailored Automation for Growth."
        />
        <meta
          name="keywords"
          content="AI Solutions, AI Chatbots, Scalable Backends, Business Automation, Machine Learning, AI Development, Custom AI, AI Integration, Next-Gen AI, AI Services"
        />
        <meta name="author" content="NextWave AI" />
        <meta property="og:title" content="NextWave AI - Home" />
        <meta
          property="og:description"
          content="Empowering Your Business with Next-Gen AI & Automation Solutions"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nextwaveai-8.vercel.app/" />
      </Helmet>
      <motion.main
        className="w-full bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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

        {/* Full Width Hero Section */}
        <section
          ref={(node) => addRef("hero", node)}
          id="hero"
          className="relative min-h-screen w-full bg-[#c4d4f5]"
        >
          {/* Hero Content */}
          <div className="min-h-[60vh] sm:min-h-[65vh] flex flex-col justify-center ">
            <Hero />

            {/* Icon Marquee - Part of Hero */}
            <motion.div
              className="relative z-10 w-full mt-32 sm:mt-24 lg:mt-20 mb-2 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroAnimationComplete
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <IconMarquee />
            </motion.div>
          </div>
        </section>

        {/* Other Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            ["services", <Services key="services" />],
            ["industries", <IndustryServed key="industries" />],
            ["research", <Blog key="research" />],
            ["faqs", <FAQs key="faqs" />],
            ["contact", <Contact key="contact" />],
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
        </motion.div>

        {/* Scroll To Top */}
        <div
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 transition-all duration-300 hover:scale-110"
          style={{
            opacity: scrollY > 300 ? 1 : 0,
            transform: `translateY(${scrollY > 300 ? 0 : 20}px)`,
            pointerEvents: scrollY > 300 ? "auto" : "none",
          }}
        >
          <button
            className="bg-[#2176C1] text-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:rotate-12"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
    </>
  );
};

export default HomePage;
