import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FAFBFC] to-[#F0F9FF] py-16 overflow-hidden relative">
      <div className="relative z-10  mb-8 mt-8 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4">Testimonials</h2>
          <p className="">
            Discover how leading companies achieve breakthrough results with our
            AI solutions
          </p>
        </motion.div>

        {/* Testimonials Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Marquee Wrapper */}
          <div className="flex w-max animate-marquees">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card flex-shrink-0 w-80 m-4 h-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 p-6 flex flex-col items-center text-center hover:bg-white/80 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300 group overflow-hidden mx-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Avatar on top */}
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow-md mx-auto"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-6">
                  <p className="text-[#374151] text-sm leading-relaxed italic">
                    "{testimonial.text.slice(0, 150)}..."
                  </p>
                </div>

                {/* Bottom Section: Left -> Name, title, company; Right -> Read {testimonial.name} */}
                <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-[#2176C1] font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#6B7280] text-xs">
                      {testimonial.title}
                    </p>
                    <p className="text-[#FFC043] text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>

                  <Link
                    to={`/testimonial/${testimonial.id}`}
                    className="cursor-pointer group/btn inline-flex items-center gap-2 text-[#2176C1] hover:text-[#185a96] font-medium text-sm transition-colors duration-200"
                  >
                    <span>Read {testimonial.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
              </motion.div>
            ))}

            {/* Duplicate for seamless looping */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="testimonial-card flex-shrink-0 w-80 h-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 p-6 flex flex-col items-center text-center hover:bg-white/80 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300 group overflow-hidden mx-4"
              >
                {/* Avatar on top */}
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow-md mx-auto"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-6">
                  <p className="text-[#374151] text-sm leading-relaxed italic">
                    "{testimonial.text.slice(0, 150)}..."
                  </p>
                </div>

                {/* Bottom Section: Left -> Name, title, company; Right -> Read {testimonial.name} */}
                <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-[#2176C1] font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#6B7280] text-xs">
                      {testimonial.title}
                    </p>
                    <p className="text-[#FFC043] text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>

                  <Link
                    to={`/testimonial/${testimonial.id}`}
                    className="cursor-pointer group/btn inline-flex items-center gap-2 text-[#2176C1] hover:text-[#185a96] font-medium text-sm transition-colors duration-200"
                  >
                    <span>Read {testimonial.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquees {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }

        .animation-delay-2000 {
          animation-delay: 1s;
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Pause animation on hover */
        .animate-marquees:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
