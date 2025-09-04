import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaBookOpen, FaHeart, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaComment, FaEye } from "react-icons/fa";
import blogPosts from "../data/blogData";
import { Helmet } from "react-helmet";

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
      // Update document title when article is found
      document.title = ` NextWave AI - Blog | ${foundArticle.title}`;
    } else {
      document.title = 'Article Not Found | NextWave AI Blog';
      navigate('/blog');
    }
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'NextWave AI';
    };
  }, [id, navigate]);


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
    <>
   <Helmet>
  <title> NextWave AI Blog | {article.title} </title>
  <meta name="description" content={article.desc} />
  <meta name="keywords" content={`${article.category}, AI, Technology, NextWave AI`} />
  <meta name="author" content={article.author} />
  <link rel="canonical" href={`https://nextwaveai-8.vercel.app/blog/${id}`} />
</Helmet>

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
    </>
  );
};

export default BlogArticle;
