// ✅ Fixed Rolling Words Component (matches image style)
const RollingWords = ({ words, interval = 3000, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 800); // Slightly longer for smoother effect
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  const currentWord = words[index];
  const nextWord = words[(index + 1) % words.length];

  return (
    <span 
      className={`inline-block relative h-12 overflow-hidden ${className}`} 
      style={{ 
        minWidth: "260px",
        perspective: "1000px" // Add 3D perspective
      }}
    >
      {/* Current word with 3D cylinder roll effect */}
      <motion.span
        key={`current-${currentWord}`}
        initial={{ rotateX: 0, y: 0, opacity: 1 }}
        animate={{ 
          rotateX: isAnimating ? 90 : 0, // Rotate around X-axis for cylinder effect
          y: isAnimating ? -20 : 0,      // Slight upward movement
          opacity: isAnimating ? 1 : 1
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth roll
          type: "tween"
        }}
        className="absolute inset-0 text-[#2176C1] font-black block text-4xl md:text-6xl flex items-center"
        style={{
          transformOrigin: "center center", // Rotate around center
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden"
        }}
      >
        {currentWord}
      </motion.span>
      
      {/* Next word rolling in from bottom */}
      <motion.span
        key={`next-${nextWord}`}
        initial={{ rotateX: -90, y: 20, opacity: 0 }}
        animate={{ 
          rotateX: isAnimating ? 0 : -90,
          y: isAnimating ? 0 : 20,
          opacity: isAnimating ? 1 : 0
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: isAnimating ? 0.1 : 0, // Slight delay for realistic rolling
          type: "tween"
        }}
        className="absolute inset-0 text-[#2176C1] font-black block text-5xl md:text-6xl flex items-center"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden"
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