import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import blogPosts from "../blogPosts";
import './blog.css'

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current;

    // Reset all cards (except first)
    items.forEach((item, i) => {
      if (i !== 0) gsap.set(item, { yPercent: 100 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        tl.to(item, { scale: 0.9, borderRadius: "20px" });
        tl.to(items[i + 1], { yPercent: 0 }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <main className="main-wrapper">
      {/* ========= HEADER ========= */}
      <div className="section">
        <div className="container-medium">
          <div className="padding-vertical text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-[#2176C1] bg-clip-text text-transparent leading-tight py-2">
              Insights & Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              Discover the latest trends, insights, and innovations in AI
              technology from our expert team.
            </p>
          </div>
        </div>
      </div>

      {/* ========= STACKING SECTION ========= */}
      <div ref={sectionRef} className="scroll-section vertical-section">
        <div className="wrapper">
          <div role="list" className="list">
            {blogPosts.map((post, i) => (
              <div
                key={post.id}
                ref={(el) => (itemsRef.current[i] = el)}
                role="listitem"
                className="item"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="item_content">
                  <h2 className="item_number">{i + 1}</h2>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="item_p">{post.desc}</p>

                  <div className="inline-flex items-center gap-3 px-6 py-3 mt-6 bg-black/10 backdrop-blur-md border border-black/10 rounded-xl text-black font-semibold hover:bg-black/20 transition-all duration-300 group">
                    Read Full Article
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Media (image or video) */}
                <div className="item_media">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;


// extra feature of card 
//   <div ref={sectionRef} className="scroll-section vertical-section">
//         <div className="wrapper">
//           <div role="list" className="list">
//             {blogPosts.map((post, i) => (
//               <div
//                 key={post.id}
//                 ref={(el) => (itemsRef.current[i] = el)}
//                 role="listitem"
//                 className="item cursor-pointer"
//                 onClick={() => navigate(`/blog/${post.id}`)}
//               >
//                 {/* Card Background */}
//                 <div className="absolute inset-0 w-full h-full">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Dark overlay */}
//                   <div className="absolute inset-0 bg-black/60"></div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="relative z-10 flex h-full items-center px-8 md:px-16">
//                   <div className="max-w-3xl text-white">
//                     <h2 className="item_number text-white">{i + 1}</h2>
//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//                       {post.title}
//                     </h2>
//                     <p className="text-gray-200">{post.desc}</p>

//                     <div className="inline-flex items-center gap-3 px-6 py-3 mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 group">
//                       Read Full Article
//                       <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>