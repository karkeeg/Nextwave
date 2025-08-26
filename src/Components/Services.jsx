import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
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
  const rightScrollRef = useRef(null);
  const stickyRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [itemMetrics, setItemMetrics] = useState({ top: 0, step: 64, height: 86, trackTop: 0, trackHeight: 0 });
  const [scrollMetrics, setScrollMetrics] = useState({ scrollTop: 0, scrollHeight: 0, clientHeight: 0 });
  const selectingRef = useRef(false);
  const leftItemRefs = useRef([]);
  const touchStartYRef = useRef(0);
  const edgeLockRef = useRef(null); // kept for state reset compatibility
  const releasingRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  // Track viewport size to toggle desktop/mobile behavior
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

  // Derived positions for indicator: show overall scroll progress of right panel
  const viewRatio = scrollMetrics.scrollHeight > 0
    ? scrollMetrics.clientHeight / scrollMetrics.scrollHeight
    : 0;
  const indicatorHeight = itemMetrics.trackHeight > 0
    ? Math.max(28, itemMetrics.trackHeight * viewRatio)
    : 0;
  const maxYWithinTrack = Math.max(0, itemMetrics.trackHeight - indicatorHeight);
  const progress = scrollMetrics.scrollHeight > scrollMetrics.clientHeight
    ? scrollMetrics.scrollTop / (scrollMetrics.scrollHeight - scrollMetrics.clientHeight)
    : 0;
  const indicatorY = itemMetrics.trackTop + (maxYWithinTrack * progress);
  const fillHeight = Math.max(0, itemMetrics.trackHeight * progress);
  const capOffset = Math.max(0, fillHeight - 10);

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const handleLeftSelect = (idx) => {
    setSelectedService(idx);
    selectingRef.current = true;
  };

  // Lock section to viewport and route scroll to internal list while possible
  useEffect(() => {
    if (!isDesktop) return; // only enable sticky scroll interception on desktop
    const el = stickyRef.current;
    const list = rightScrollRef.current;
    if (!el || !list) return;

    const getSectionRect = () => sectionRef.current?.getBoundingClientRect?.();
    // Only snap when scrolling INTO the Services section, not when exiting it
    const trySnapIntoSection = (delta) => {
      const r = getSectionRect();
      if (!r) return false;
      const vh = window.innerHeight;
      // If section is below viewport and user scrolls down, snap
      if (r.top > 0 && delta > 0) {
        window.scrollBy({ top: r.top, behavior: "smooth" });
        return true;
      }
      // If section is above viewport and user scrolls up, snap
      if (r.bottom < vh && delta < 0) {
        const offset = r.bottom - vh;
        window.scrollBy({ top: offset, behavior: "smooth" });
        return true;
      }
      return false;
    };

    const onWheel = (e) => {
      if (releasingRef.current) return; // don't intercept while releasing to page
      // Only capture vertical scroll
      const delta = e.deltaY;
      if (delta === 0) return;

      // If user is approaching Services, snap it into view
      const snapped = trySnapIntoSection(delta);
      if (snapped) {
        e.preventDefault();
        return;
      }
      const atTop = list.scrollTop <= 0;
      const atBottom = Math.ceil(list.scrollTop + list.clientHeight) >= list.scrollHeight;
      const canScrollDown = delta > 0 && !atBottom;
      const canScrollUp = delta < 0 && !atTop;
      if (canScrollDown || canScrollUp) {
        e.preventDefault();
        // Use instant to feel native; smooth can feel laggy with passive prevention
        list.scrollTo({ top: list.scrollTop + delta, behavior: "auto" });
        edgeLockRef.current = null; // reset edge lock while scrolling internally
        return;
      }

      // At edge: allow natural page scroll immediately
      releasingRef.current = true;
      window.setTimeout(() => { releasingRef.current = false; }, 500);
      return; // let the browser handle this wheel normally
    };

    let lastY = 0;
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length) {
        lastY = e.touches[0].clientY;
        touchStartYRef.current = lastY;
      }
    };
    const onTouchMove = (e) => {
      if (releasingRef.current) return; // don't intercept while releasing to page
      if (!(e.touches && e.touches.length)) return;
      const y = e.touches[0].clientY;
      const delta = lastY - y; // positive when swiping up (scroll down)
      lastY = y;

      // Snap section if scrolling into it
      const snapped = trySnapIntoSection(delta);
      if (snapped) {
        e.preventDefault();
        return;
      }
      const atTop = list.scrollTop <= 0;
      const atBottom = Math.ceil(list.scrollTop + list.clientHeight) >= list.scrollHeight;
      const canScrollDown = delta > 0 && !atBottom;
      const canScrollUp = delta < 0 && !atTop;
      if (canScrollDown || canScrollUp) {
        e.preventDefault();
        list.scrollTo({ top: list.scrollTop + delta, behavior: "auto" });
        edgeLockRef.current = null;
        return;
      }

      // At edge on touch: release immediately and let native scrolling proceed
      releasingRef.current = true;
      window.setTimeout(() => { releasingRef.current = false; }, 500);
      return; // let native scroll proceed
    };
    const onTouchEnd = () => {
      // Small grace period already resets; keep behavior predictable on mobile
    };

    // Capture phase to intercept before page scroll
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDesktop]);

  // Scroll-sync: when left selection changes (from click), scroll right list to that card
  useEffect(() => {
    const container = rightScrollRef.current;
    const el = cardRefs.current[selectedService];
    if (!container || !el) return;
    if (!selectingRef.current) return; // only auto-scroll when initiated from left click
    const target = el.offsetTop - (container.clientHeight / 2 - el.clientHeight / 2);
    container.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    window.setTimeout(() => { selectingRef.current = false; }, 450);
  }, [selectedService]);

  // Smoothly ensure the active left item is visible when selection changes
  useEffect(() => {
    const li = leftItemRefs.current[selectedService];
    if (!li) return;
    li.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [selectedService]);

  // Detect active card while scrolling right list and update left highlight + middle indicator (progress)
  useEffect(() => {
    const container = rightScrollRef.current;
    if (!container) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Update progress metrics for the middle indicator
        setScrollMetrics({
          scrollTop: container.scrollTop,
          scrollHeight: container.scrollHeight,
          clientHeight: container.clientHeight,
        });
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.top + containerRect.height / 2;
        let closestIdx = 0;
        let closestDist = Infinity;
        cardRefs.current.forEach((node, idx) => {
          if (!node) return;
          const r = node.getBoundingClientRect();
          const center = r.top + r.height / 2;
          const dist = Math.abs(center - containerCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        setSelectedService((prev) => (prev !== closestIdx ? closestIdx : prev));
        ticking = false;
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    // Initialize metrics on mount
    setScrollMetrics({
      scrollTop: container.scrollTop,
      scrollHeight: container.scrollHeight,
      clientHeight: container.clientHeight,
    });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

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
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sticky viewport-locked container */}
      <div ref={stickyRef} className="relative z-10 max-w-7xl mx-auto px-4 lg:h-screen lg:sticky lg:top-0">
        {/* Header */}
        <motion.div
          className="text-center py-6"
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

        {/* Mobile Timeline (stacked cards with numbered steps) */}
        {!isDesktop && (
          <div className="lg:hidden relative max-w-3xl mx-auto py-4">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-200 rounded-full" />
            {services.map((svc, idx) => (
              <div key={svc.id} className="relative pl-16 mb-10">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white ring-2 ring-blue-400 text-blue-700 font-bold flex items-center justify-center shadow-sm">
                  {idx + 1}
                </div>
                <div className="rounded-2xl border border-blue-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative w-full">
                    <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="absolute inset-0 ring-1 ring-blue-200/50 rounded-none pointer-events-none" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-slate-900">{svc.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{svc.desc}</p>
                    <ul className="mt-3 space-y-1">
                      {svc.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className={`w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center bg-gradient-to-r ${svc.color}`}>{i + 1}</span>
                          <span className="flex-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleServiceClick(svc.id)} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 hover:bg-blue-100">
                      Learn more
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop: Left list | Middle divider | Right details */}
        {isDesktop && (
          <motion.div
            className="grid grid-rows-[auto_1fr] lg:grid-rows-1 grid-cols-1 lg:grid-cols-[1fr_16px_1.2fr] gap-4 items-stretch h-[calc(100%-3.5rem)]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Left: Services list */}
          <motion.div ref={leftPanelRef} className="rounded-2xl p-4 md:p-5 overflow-hidden" variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-6xl font-extrabold text-[#2176C1]">Our Services</h2>
              <p className="text-slate-600 mt-2">Specialized technical solutions that power modern businesses with cutting-edge technology.</p>
            </div>
            <ul ref={listRef} className="space-y-3 relative max-h-[calc(100vh-220px)] overflow-auto pr-1 no-scrollbar">
              {services.map((s, idx) => (
                <li key={s.id} data-service-item="true" ref={(el) => (leftItemRefs.current[idx] = el)}>
                  <button
                    className={`group w-full flex items-center gap-4 rounded-xl px-3 py-2 text-left transition-colors`}
                    onClick={() => handleLeftSelect(idx)}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${
                      idx === selectedService ? "bg-slate-200 text-black" : "bg-slate-100 text-slate-700"
                    }`}>{idx + 1}</span>
                    <span className={`transition-colors duration-200 ${idx === selectedService ? "font-bold text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle: vertical divider with animated progress fill */}
          <div className="hidden lg:flex items-stretch min-h-full" ref={middleRef}>
            <div className="relative h-full min-h-full w-full">
              {/* Light full-height track */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[10px] rounded-full"
                style={{ background: "rgba(37, 99, 235, 0.20)", top: itemMetrics.trackTop, height: itemMetrics.trackHeight }}
              />
              {/* Filled portion from top to current progress */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[10px] rounded-full"
                style={{
                  background: "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)",
                  top: itemMetrics.trackTop,
                }}
                animate={{ height: fillHeight }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
              />
              {/* Soft glow around the filled portion */}
              <motion.div
                className="absolute left-1/4 -translate-x-1/2 w-[16px] rounded-full pointer-events-none"
                style={{
                  top: itemMetrics.trackTop,
                  background: "linear-gradient(180deg, rgba(96,165,250,0.55) 0%, rgba(37,99,235,0.55) 100%)",
                  filter: "blur(6px)",
                  opacity: 0.9,
                }}
                animate={{ height: fillHeight }}
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
              />
              {/* Glowing cap dot at the current progress end
              <motion.div
                className="absolute left-1/4 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-blue-500 shadow-lg shadow-blue-400/60"
                style={{ top: itemMetrics.trackTop - 7 }}
                animate={{ y: capOffset }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
              /> */}
            </div>
          </div>

          {/* Right: Scrollable details list (one card at a time, snap) */}
          <motion.div ref={rightPanelRef} className="min-h-0 h-full" variants={itemVariants}>
            <div
              ref={rightScrollRef}
              className="lg:h-full lg:overflow-y-auto pr-2 space-y-12 md:space-y-16 lg:space-y-48 pb-16 md:pb-24 lg:pb-36 no-scrollbar"
            >
              {services.map((svc, idx) => (
                <motion.div
                  key={svc.id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`group relative rounded-3xl border bg-white/80 backdrop-blur shadow-lg transition-all
                    ${idx === selectedService ? "border-blue-200 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"}
                  `}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Full-image card with content overlay on top */}
                  <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden rounded-3xl">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/20" />
                    {/* Content overlay */}
                    <div className="absolute inset-x-0 top-0 p-4 md:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 text-white">
                          <h4 className="text-lg md:text-xl font-semibold">{svc.title}</h4>
                          <p className="text-white/90 text-sm md:text-base mt-1 line-clamp-2 md:line-clamp-3">{svc.desc}</p>
                          <ul className="mt-2 space-y-1">
                            {svc.features.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <span className={`w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center bg-gradient-to-r ${svc.color}`}>{i + 1}</span>
                                <span className="truncate">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => handleServiceClick(svc.id)}
                          className="mt-1 shrink-0 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 backdrop-blur px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/30"
                        >
                          Learn more
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                    {/* Floating icon badge */}
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-white/90 shadow-md flex items-center justify-center">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-r ${svc.color} text-white flex items-center justify-center`}>{svc.icon}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        )}

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