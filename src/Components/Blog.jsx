import React from "react";

const blogPosts = [
  {
    id: 1,
    author: "Kritive Bhandari",
    category: "About AI",
    date: "April 23,2025",
    title: "Unlocking the Future: How AI is Changing Our World",
    desc: "Artificial Intelligence (AI) is no longer a concept confined to science fiction or tech labs. It's here, it's real, and it's transforming the way we live, work, and interact with the world. From voice assistants in our phones to recommendation systems on Netflix, AI has quietly become an integral part of our daily lives.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    author: "Kritive Bhandari",
    category: "About AI",
    date: "April 23,2025",
    title: "Changing the World with AI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    dark: true,
  },
  {
    id: 3,
    author: "Kritive Bhandari",
    category: "About AI",
    date: "April 23,2025",
    title: "Change World with Artificial Intelligence",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    author: "Kritive Bhandari",
    category: "About AI",
    date: "April 23,2025",
    title: "Change World with Artificial Intelligence",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    author: "Kritive Bhandari",
    category: "About AI",
    date: "April 23,2025",
    title: "Change World with Artificial Intelligence",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] pb-0">
      {/* Featured Blog */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] mb-8 text-center font-['Inter'] tracking-tight">
          Insights & Stories from NextWaveAI
        </h1>
        <div className="bg-white rounded-md border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
          {/* Left: Text */}
          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#7B8591] mb-2">
                <span>{blogPosts[0].author}</span>
                <span className="mx-1">|</span>
                <span className="bg-[#F4F8FE] text-[#2176C1] px-2 py-0.5 rounded">
                  {blogPosts[0].category}
                </span>
                <span className="mx-1">|</span>
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#7B8591"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                    />
                  </svg>
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#232B36] mb-4 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-[#7B8591] text-base mb-6">
                {blogPosts[0].desc}
              </p>
            </div>
            <button className="self-start mt-2 group">
              <span className="inline-block w-10 h-10 rounded-full border border-[#2176C1] flex items-center justify-center group-hover:bg-[#2176C1] transition">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 12h8m0 0-3.5-3.5M16 12l-3.5 3.5"
                    stroke="#2176C1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Right: Image */}
          <div className="w-full h-64 md:h-auto">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-8 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Large Card */}
        <div className="col-span-1 md:col-span-1 flex flex-col">
          <div className="relative rounded-md overflow-hidden h-[420px] md:h-full flex-1 flex flex-col justify-end bg-black">
            <img
              src={blogPosts[1].image}
              alt={blogPosts[1].title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
            />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {blogPosts[1].title}
              </h3>
              <p className="text-white text-base mb-4">{blogPosts[1].desc}</p>
              <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#232B36] transition w-max">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* Right Grid */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-6">
          {blogPosts.slice(2).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 w-full h-48 md:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#7B8591] mb-2">
                    <span>{post.author}</span>
                    <span className="mx-1">|</span>
                    <span className="bg-[#F4F8FE] text-[#2176C1] px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="mx-1">|</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#7B8591"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                        />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[#232B36] mb-2">
                    {post.title}
                  </h4>
                  <p className="text-[#7B8591] text-sm mb-4">{post.desc}</p>
                </div>
                <div className="mt-4">
                  <button className="border border-[#2176C1] text-[#2176C1] px-4 py-2 rounded-full hover:bg-[#2176C1] hover:text-white transition w-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
