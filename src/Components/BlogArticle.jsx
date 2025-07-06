import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "../blogPosts";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-[#2176C1] underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] pb-0">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#2176C1] underline"
        >
          ← Back to Blog
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] mb-2 font-['Inter']">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-xs text-[#7B8591] mb-6">
          <span>{post.author}</span>
          <span className="mx-1">|</span>
          <span className="bg-[#F4F8FE] text-[#2176C1] px-2 py-0.5 rounded">
            {post.category}
          </span>
          <span className="mx-1">|</span>
          <span>{post.date}</span>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover object-center rounded-xl mb-8"
        />
        <div className="prose prose-lg max-w-none text-[#232B36]">
          {post.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
