import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const maxWordLength = Math.max(...words.map((word) => word.length));
  const baseWidth = maxWordLength * 30; // Increased base character width

  return (
    <span
      className={`inline-block relative overflow-visible ${className}`}
      style={{
        minWidth: `${baseWidth}px`,
        maxWidth: "100%",
        height: "0.7em",
        perspective: "1000px",
      }}
    >
      {/* Current word with 3D cylinder roll effect */}
      <motion.span
        key={`current-${currentWord}`}
        initial={{ rotateX: 0, y: 0, opacity: 1 }}
        animate={{
          rotateX: isAnimating ? 90 : 0,
          y: isAnimating ? "-0.5em" : 0, // Use em for responsive movement
          opacity: isAnimating ? 1 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
        className="absolute inset-0 text-[#2176C1] font-black flex items-center justify-center text-center w-full"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          fontSize: "inherit", // Inherit font size from parent
          lineHeight: "1.1",
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
          opacity: isAnimating ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: isAnimating ? 0.1 : 0,
          type: "tween",
        }}
        className="absolute inset-0 text-[#2176C1] font-black flex items-center justify-center text-center w-full"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          fontSize: "inherit",
          lineHeight: "1.1",
        }}
      >
        {nextWord}
      </motion.span>
    </span>
  );
};

export default RollingWords;
