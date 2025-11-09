import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import blogPosts from "../data/blogData";
import "./blog.css";
import { Clock } from "lucide-react";
import Clockinsights from "./clockinsight/ClockInsights";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current;

    // Reset all cards (except first)
    items.forEach((item, i) => {
      if (i !== 0) gsap.set(item, { yPercent: 120 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 120}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        tl.to(item, { scale: 0.9, borderRadius: "20px" });
        tl.to(items[i + 1], { yPercent: 2 }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <main className="main-wrapper">
      <Clockinsights />
    </main>
  );
};

export default Blog;
