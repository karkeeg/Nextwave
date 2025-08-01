import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Homepage2 from "../assets/animation/Homepage2.png";
import Homepage3 from "../assets/animation/Homepage3.png";
import Homepage4 from "../assets/animation/Homepage4.png";

const LogoAnimation = ({ onAnimationComplete }) => {
  const navigate = useNavigate();
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 1: First image slides from center-left to center (1s)
    setTimeout(() => setAnimationStage(1), 1000);
    
    // Stage 2: Transitions to second image (3s)
    setTimeout(() => setAnimationStage(2), 3000);
    
    // Stage 3: Transitions to final logo version (5s)
    setTimeout(() => setAnimationStage(3), 5000);
    
    // Stage 4: Logo moves to header position (7s)
    setTimeout(() => setAnimationStage(4), 7000);
    
    // Stage 5: Page content appears (8s)
    setTimeout(() => {
      onAnimationComplete();
      navigate('/');
    }, 8000);
  }, [navigate, onAnimationComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99999,
          backgroundColor: 'white'
        }}
      >
        {/* Stage 1: Homepage2 slides from center-left to center */}
        <AnimatePresence>
          {animationStage >= 1 && animationStage < 2 && (
            <motion.div
              className="absolute left-2/3 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ x: -500, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ zIndex: 100000 }}
            >
              <img
                src={Homepage2}
                alt="Logo Stage 1"
                className="w-80 h-80 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: Homepage3 fades in with perfect transition */}
        <AnimatePresence>
          {animationStage >= 2 && animationStage < 3 && (
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ zIndex: 100000 }}
            >
              <img
                src={Homepage3}
                alt="Logo Stage 2"
                className="w-80 h-80 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3: Homepage4 fades in with perfect transition */}
        <AnimatePresence>
          {animationStage >= 3 && animationStage < 4 && (
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ zIndex: 100000 }}
            >
              <img
                src={Homepage4}
                alt="Logo Stage 3"
                className="w-80 h-80 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 4: Homepage4 moves to header position */}
        <AnimatePresence>
          {animationStage >= 4 && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{ scale: 0.25, x: 0, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ zIndex: 100000 }}
            >
              <img
                src={Homepage4}
                alt="Logo Final"
                className="w-80 h-80 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading text with pulsing effect */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-700 text-xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ zIndex: 100000 }}
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-3"
          >
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            Loading Next Wave AI
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            />
          </motion.span>
        </motion.div>

        {/* Background particles effect */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 99999 }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                zIndex: 99999
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LogoAnimation; 