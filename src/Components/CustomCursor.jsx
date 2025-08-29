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

    const handleHover = (e) => {
      // More specific check to ensure we're actually hovering over an interactive element
      const target = e.target;
      const isInteractive = target.matches('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer') ||
                           target.closest('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer');
      
      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = (e) => {
      // Add a small delay to prevent flicker
      setTimeout(() => {
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        if (elementUnderCursor) {
          const isStillOverInteractive = elementUnderCursor.matches('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer') ||
                                        elementUnderCursor.closest('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer');
          
          if (!isStillOverInteractive) {
            setIsHovering(false);
          }
        } else {
          setIsHovering(false);
        }
      }, 10);
    };

    // Use mouseover/mouseout instead of mouseenter/mouseleave for better detection
    const handleDocumentMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer') ||
                           target.closest('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleDocumentMouseOver);

    // Also keep the individual element listeners as backup
    const interactiveElements = document.querySelectorAll(
      "button, a, [role='button'], input[type='submit'], input[type='button'], .cursor-pointer"
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleDocumentMouseOver);
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