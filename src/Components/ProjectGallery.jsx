import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMicrophone, 
  FaGlobe, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaRobot,
  FaChartLine,
  FaUsers,
  FaLock,
  FaRocket
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "REAL-TIME SPEECH TRANSCRIPTION",
    subtitle: "WITH WHISPER STT API",
    description: "Convert voice into accurate text using cutting-edge open source models like Whisper - ideal for calls, meetings and voice logs.",
    icon: FaMicrophone,
    features: [
      { icon: FaGlobe, text: "Meeting Transcription" },
      { icon: FaShieldAlt, text: "Background Noise Robustness" },
      { icon: FaNetworkWired, text: "Multilingual Audio" },
      { icon: FaRocket, text: "Real-time API Deployment" }
    ],
    deployment: ["Deployable via API", "Mobile Compatible", "Offline/Cloud Available"],
    color: "blue"
  },
  {
    id: 2,
    title: "AI-POWERED CHATBOT SOLUTION",
    subtitle: "WITH GPT-4 INTEGRATION",
    description: "Build intelligent conversational agents that understand context and provide human-like responses for customer support and automation.",
    icon: FaRobot,
    features: [
      { icon: FaUsers, text: "Multi-language Support" },
      { icon: FaLock, text: "Enterprise Security" },
      { icon: FaCode, text: "Custom Integration" },
      { icon: FaChartLine, text: "Analytics Dashboard" }
    ],
    deployment: ["Cloud Hosted", "API Ready", "Custom Branding"],
    color: "green"
  },
  {
    id: 3,
    title: "PREDICTIVE ANALYTICS PLATFORM",
    subtitle: "WITH MACHINE LEARNING",
    description: "Transform your data into actionable insights with advanced ML algorithms for forecasting, pattern recognition, and business intelligence.",
    icon: FaChartLine,
    features: [
      { icon: FaGlobe, text: "Real-time Processing" },
      { icon: FaShieldAlt, text: "Data Privacy Compliant" },
      { icon: FaNetworkWired, text: "Scalable Architecture" },
      { icon: FaRocket, text: "Auto-scaling Deployment" }
    ],
    deployment: ["Enterprise Ready", "Multi-cloud", "Custom Models"],
    color: "purple"
  }
];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", "AI/ML", "Automation", "Analytics", "Integration"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100"
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge AI solutions and innovative projects that drive business transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#2176C1] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          {projects.map((project) => {
            const colorClasses = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative h-full"
              >
                <div className={`bg-white rounded-2xl shadow-lg border ${colorClasses.border} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col`}>
                  {/* Card Header */}
                  <div className={`p-5 ${colorClasses.bg} flex-shrink-0`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium ${colorClasses.text} mb-2`}>
                          {project.subtitle}
                        </p>
                      </div>
                      <div className={`p-2 rounded-full ${colorClasses.bg} ${colorClasses.border}`}>
                        <IconComponent className={`w-5 h-5 ${colorClasses.text}`} />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Interactive Demo Area */}
                  <div className="p-5 bg-gray-50 flex-shrink-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <FaMicrophone className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className={`flex-1 h-6 rounded-lg ${colorClasses.bg} ${colorClasses.border} flex items-center px-2`}>
                        <span className="text-xs font-medium text-gray-700">
                          {project.title.split(' ')[0]} {project.title.split(' ')[1]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Sound Waves Animation */}
                    <div className="flex items-end space-x-1 h-6">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 rounded-full ${colorClasses.text}`}
                          animate={{
                            height: [6, 18, 6],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          style={{ height: 6 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Use Case Highlights */}
                  <div className="p-5 border-t border-gray-100 flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      USE CASE HIGHLIGHTS
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={index} className="flex items-center space-x-2">
                            <FeatureIcon className={`w-3 h-3 ${colorClasses.text}`} />
                            <span className="text-xs text-gray-600">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deployment Options */}
                  <div className="px-5 pb-5 flex-shrink-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                      {project.deployment.map((option, index) => (
                        <React.Fragment key={index}>
                          <span className="text-center">{option}</span>
                          {index < project.deployment.length - 1 && (
                            <div className="w-px h-3 bg-gray-300" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#2176C1]/30 to-transparent rounded-2xl flex items-center justify-center"
                  >
                    <button className="bg-white text-[#2176C1] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 text-sm">
                      View Project Details
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 bg-white text-[#2176C1] font-medium px-6 py-3 rounded-lg border-2 border-[#2176C1] hover:bg-[#2176C1] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery; 