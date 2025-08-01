import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCalendar, FaUser, FaTag, FaBookOpen, FaHeart, FaShare, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import blogPosts from "../blogPosts";

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(0);

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const nextPost = () => {
    setSelectedPost((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setSelectedPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToPost = (index) => {
    setSelectedPost(index);
  };

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

  const currentPost = blogPosts[selectedPost];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Insights & Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest trends, insights, and innovations in AI technology from our expert team.
          </p>
        </motion.div>

        {/* Featured Post Carousel */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPost}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-full cursor-pointer"
                onClick={() => handlePostClick(currentPost.id)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-2xl px-8 md:px-16 text-white">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <FaUser className="text-blue-400" />
                          <span>{currentPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-blue-400" />
                          <span>{currentPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaTag className="text-blue-400" />
                          <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
                            {currentPost.category}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        {currentPost.title}
                      </h2>

                      {/* Description */}
                      <p className="text-xl text-gray-200 leading-relaxed">
                        {currentPost.desc}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                          Read Full Article
                          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">Featured</div>
                    <div className="text-sm opacity-80">Latest Post</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-4 text-white">
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                      <FaHeart className="text-red-400" />
                    </button>
                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                      <FaShare className="text-blue-400" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPost();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group z-20"
            >
              <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPost();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group z-20"
            >
              <FaChevronRight className="text-xl group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {blogPosts.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPost(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === selectedPost 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Post Counter */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
              <div className="text-white text-sm">
                <span className="font-bold">{selectedPost + 1}</span>
                <span className="mx-1">/</span>
                <span>{blogPosts.length}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with AI Insights
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest AI trends, insights, and stories delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
