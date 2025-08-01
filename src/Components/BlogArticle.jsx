import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaBookOpen, FaHeart, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaComment, FaEye } from "react-icons/fa";
import blogPosts from "../blogPosts";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);
  const [viewCount, setViewCount] = useState(Math.floor(Math.random() * 200) + 100);
  const [commentCount, setCommentCount] = useState(Math.floor(Math.random() * 20) + 5);

  useEffect(() => {
    const foundArticle = blogPosts.find(post => post.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/#research')}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-blue-600 hover:text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Blog
          </button>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-500" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-blue-500" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-blue-500" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-blue-500" />
              <span>{viewCount} views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-gray-700 leading-relaxed text-lg space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Like and Comment */}
            <div className="flex items-center gap-6">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isLiked 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                }`}
              >
                <FaHeart className={isLiked ? 'text-red-600' : ''} />
                <span>{likeCount}</span>
              </button>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full">
                <FaComment />
                <span>{commentCount}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <FaTwitter />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300"
              >
                <FaLinkedin />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                <FaShare />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(post => post.id !== article.id)
              .slice(0, 2)
              .map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <FaTag className="text-blue-500" />
                      <span>{post.category}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.desc}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogArticle;
