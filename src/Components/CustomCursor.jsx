import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

// Memoize the component to prevent unnecessary re-renders
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useRef(false);
  const requestRef = useRef();
  const lastX = useRef(0);
  const lastY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  
  // Use transform for better performance than left/top
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Check if device supports hover (desktop)
  const checkIfDesktop = useCallback(() => {
    isDesktop.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    return isDesktop.current;
  }, []);

  // Handle mouse movement with requestAnimationFrame for better performance
  const handleMouseMove = useCallback((e) => {
    if (!isDesktop.current) return;
    
    targetX.current = e.clientX;
    targetY.current = e.clientY;
    
    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(updateCursor);
    }
  }, []);

  // Update cursor position with spring effect
  const updateCursor = useCallback(() => {
    if (!isDesktop.current) return;
    
    // Simple easing function for smooth movement
    const ease = 0.15;
    const dx = (targetX.current - lastX.current) * ease;
    const dy = (targetY.current - lastY.current) * ease;
    
    lastX.current += dx;
    lastY.current += dy;
    
    setCoords({ x: lastX.current, y: lastY.current });
    
    // Continue the animation loop if we're still moving
    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      requestRef.current = requestAnimationFrame(updateCursor);
    } else {
      requestRef.current = null;
    }
  }, []);

  // Check for hover state
  const checkHoverState = useCallback((e) => {
    if (!isDesktop.current) return;
    
    const target = e.target;
    const isInteractive = target.matches('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer') ||
                         target.closest('button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer');
    
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    // Initial setup
    const isDesktopDevice = checkIfDesktop();
    
    if (isDesktopDevice) {
      // Set initial position
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
      lastX.current = initialX;
      lastY.current = initialY;
      targetX.current = initialX;
      targetY.current = initialY;
      setCoords({ x: initialX, y: initialY });
      
      // Show cursor after a short delay
      const timer = setTimeout(() => setIsVisible(true), 50);
      
      // Add event listeners
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', checkHoverState);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', checkHoverState);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [checkIfDesktop, handleMouseMove, checkHoverState]);

  // Don't render cursor on mobile devices or if not visible
  if (!isDesktop.current || !isVisible) return null;
  
  return (
    <div 
      className={`cursor ${isHovering ? "cursor--hover" : ""}`}
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0) translate(-50%, -50%)`,
        opacity: 1,
        scale: isHovering ? 1.5 : 1,
        transition: isHovering 
          ? 'scale 0.2s ease-out, background-color 0.2s ease-out' 
          : 'scale 0.3s ease-out, background-color 0.3s ease-out'
      }}
    />
  );
};

export default CustomCursor;