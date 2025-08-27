import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // motion values for position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // spring values for smoothing
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // hover detection (optional, could rely on CSS instead)
    const interactiveElements = document.querySelectorAll(
      "button, a, [role='button'], input[type='submit'], input[type='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`cursor ${isHovering ? "cursor--hover" : ""}`}
      style={{
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  );
};

export default CustomCursor;
