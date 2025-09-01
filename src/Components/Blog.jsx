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
      if (i !== 0) gsap.set(item, { yPercent: 120 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 120}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        tl.to(item, { scale: 0.9, borderRadius: "20px" });
        tl.to(items[i + 1], { yPercent: 2 }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <main className="main-wrapper mt-2">
      {/* ========= HEADER ========= */}
      <div className="section">
        <div className="container-medium">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="bg-clip-text py-2 mb-6">
              Insights & Stories
            </h1>
           
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
                className="item cursor-pointer"
                // onClick={() => navigate(`/blog/${post.id}`)}
              >
                {/* Card Background */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay - stronger on mobile for better text readability */}
                  <div className="absolute inset-0 bg-black/70 sm:bg-black/60"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-8 lg:px-16">
                  <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-white w-full">
                    {/* Post Number - Responsive sizing */}
                    <div className="item_number text-white mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-bold bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                      {i + 1}
                    </div>
                    
                    {/* Title - Better responsive scaling */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-100 font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                      {post.title}
                    </h2>
                    
                    {/* Description - Better mobile handling */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-full sm:max-w-2xl">
                      {post.desc}
                    </p>

                    {/* CTA Button - Mobile optimized */}
                    <button className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base">
                      <span className="hidden xs:inline">Read Full Article</span>
                      <span className="xs:hidden">Read More</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>

                {/* Mobile-specific elements */}
                <div className="absolute top-4 right-4 sm:hidden">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white font-medium">
                    {i + 1} / {blogPosts.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

// Alternative Enhanced Version with More Features
// export const BlogAlternative = () => {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const items = itemsRef.current;

//     items.forEach((item, i) => {
//       if (i !== 0) gsap.set(item, { yPercent: 100 });
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         pin: true,
//         start: "top top",
//         end: () => `+=${items.length * 100}%`,
//         scrub: 1,
//         invalidateOnRefresh: true,
//       },
//       defaults: { ease: "none" },
//     });

//     items.forEach((item, i) => {
//       if (i < items.length - 1) {
//         tl.to(item, { scale: 0.9, borderRadius: "20px" });
//         tl.to(items[i + 1], { yPercent: 0 }, "<");
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       tl.kill();
//     };
//   }, []);

//   return (
//     <main className="main-wrapper mt-12">
//       {/* ========= HEADER ========= */}
//       <div className="section">
//         <div className="container-medium">
//           <div className="text-center px-4 sm:px-6 lg:px-8">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text leading-tight font-bold bg-[#2176C1] bg-clip-text text-transparent py-2">
//               Insights & Stories
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed px-4">
//               Discover the latest trends, insights, and innovations in AI technology from our expert team.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ========= ENHANCED STACKING SECTION ========= */}
//       <div ref={sectionRef} className="scroll-section vertical-section">
//         <div className="wrapper">
//           <div role="list" className="list">
//             {blogPosts.map((post, i) => (
//               <div
//                 key={post.id}
//                 ref={(el) => (itemsRef.current[i] = el)}
//                 role="listitem"
//                 className="item cursor-pointer group"
//                 onClick={() => navigate(`/blog/${post.id}`)}
//               >
//                 {/* Card Background */}
//                 <div className="absolute inset-0 w-full h-full overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   {/* Enhanced overlay with gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:from-black/70 sm:via-black/50 sm:to-black/30"></div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                 </div>

//                 {/* Enhanced Card Content */}
//                 <div className="relative z-10 flex flex-col h-full justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
//                   <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-white w-full">
//                     {/* Enhanced Post Number */}
//                     <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//                       <div className="item_number text-white text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg">
//                         {i + 1}
//                       </div>
//                       {/* Category badge - hidden on very small screens */}
//                       <div className="hidden sm:block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
//                         {post.category || 'Insights'}
//                       </div>
//                     </div>
                    
//                     {/* Enhanced Title */}
//                     <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
//                       {post.title}
//                     </h2>
                    
//                     {/* Enhanced Description */}
//                     <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-full sm:max-w-2xl opacity-90">
//                       {post.desc}
//                     </p>

//                     {/* Enhanced Metadata - responsive visibility */}
//                     <div className="hidden sm:flex items-center gap-4 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm text-gray-300">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                         <span>{post.author || 'Admin'}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                         <span>{post.date || 'Recent'}</span>
//                       </div>
//                     </div>

//                     {/* Enhanced CTA Button */}
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
//                       <button className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group/btn text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
//                         <span className="hidden sm:inline">Read Full Article</span>
//                         <span className="sm:hidden">Read More</span>
//                         <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1 text-xs sm:text-sm" />
//                       </button>
                      
//                       {/* Reading time - hidden on mobile */}
//                       <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
//                         <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
//                         <span>5 min read</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Enhanced Mobile-specific elements */}
//                 <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:hidden">
//                   <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white font-medium border border-white/20">
//                     <span className="hidden xs:inline">{i + 1} of {blogPosts.length}</span>
//                     <span className="xs:hidden">{i + 1}/{blogPosts.length}</span>
//                   </div>
//                 </div>

//                 {/* Scroll indicator for mobile */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: blogPosts.length }, (_, idx) => (
//                       <div
//                         key={idx}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           idx === i ? 'bg-white scale-125' : 'bg-white/50'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Progress indicator on the side - tablet and desktop only */}
//                 <div className="hidden lg:block absolute right-6 top-1/2 transform -translate-y-1/2">
//                   <div className="w-1 h-20 bg-white/20 rounded-full">
//                     <div 
//                       className="w-full bg-gradient-to-t from-blue-400 to-purple-400 rounded-full transition-all duration-300"
//                       style={{ height: `${((i + 1) / blogPosts.length) * 100}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export default Blog;