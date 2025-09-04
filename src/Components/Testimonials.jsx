import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import bibek from "../assets/bibek.jpg";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sophia Turner",
    title: "Marketing Director",
    company: "BrightWave Solutions",
    text: `NextWaveAI completely revolutionized our approach to customer analytics and data-driven decision making. Their AI-powered platform helped us identify previously hidden growth opportunities and streamline our entire reporting process. What used to take our team weeks now happens in real-time. The 40% reduction in reporting time allowed us to focus more on strategy and less on data compilation. The insights we've gained have directly contributed to a 25% increase in customer engagement and a significant boost in our quarterly revenue.`,
    avatar: bibek,
    rating: 5,
  },
  {
    id: 2,
    name: "James Miller",
    title: "Chief Technology Officer",
    company: "InnovateHub",
    text: `Working with NextWaveAI has been an absolute game-changer for our development workflow. The integration process was remarkably smooth - something that usually takes months was completed in just a few days. Their support team is exceptional, providing 24/7 assistance and going above and beyond to ensure our success. The platform's AI capabilities have enhanced our code quality, reduced deployment times by 60%, and improved our overall system reliability. I can confidently say this is one of the best technology partnerships we've ever established.`,
    avatar: bibek,
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Chen",
    title: "Senior Product Manager",
    company: "AlphaTech Industries",
    text: `What impressed me most about NextWaveAI is how intuitively designed their platform is. Despite being incredibly powerful, our entire team of 50+ people adopted it within the first week without any formal training. The user interface is clean, logical, and anticipates user needs perfectly. Since implementation, we've seen a 35% improvement in project delivery times and a 50% reduction in workflow bottlenecks. The AI-driven insights have helped us make more informed product decisions and prioritize features that truly matter to our users.`,
    avatar: bibek,
    rating: 5,
  },
  {
    id: 4,
    name: "Ethan Roberts",
    title: "Founder & CEO",
    company: "GrowthLabs",
    text: `The level of precision and intelligence that NextWaveAI brings to marketing analytics is unprecedented. Their AI algorithms helped us understand our customer behavior patterns in ways we never thought possible. We were able to refine our marketing campaigns with surgical precision, targeting the right audience with the right message at the perfect time. The result? Our ROI increased by 180% in just six months, and our customer acquisition costs dropped by 45%. This platform has fundamentally transformed how we approach growth marketing.`,
    avatar: bibek,
    rating: 5,
  },
  {
    id: 5,
    name: "Maria Gomez",
    title: "Chief Executive Officer",
    company: "FutureWorks Inc.",
    text: `Partnering with NextWaveAI was one of the most strategic decisions we've made as a company. From day one, their team demonstrated unparalleled professionalism, technical expertise, and genuine commitment to our success. They didn't just provide a solution; they became true partners in our growth journey. The AI innovations they implemented have positioned us as industry leaders, improved our operational efficiency by 70%, and opened up new revenue streams we didn't even know existed. Their vision for the future of AI aligns perfectly with ours.`,
    avatar: bibek,
    rating: 5,
  },
  {
    id: 6,
    name: "David Park",
    title: "Head of Operations",
    company: "TechVenture Labs",
    text: `NextWaveAI's machine learning solutions have transformed our supply chain management beyond recognition. The predictive analytics capabilities allowed us to anticipate demand fluctuations with 95% accuracy, reducing inventory costs by 30% while eliminating stockouts entirely. Their real-time monitoring systems detected potential issues before they became problems, saving us hundreds of thousands in potential losses. The team's expertise in AI implementation is world-class, and their ongoing support ensures we're always ahead of the curve.`,
    avatar: bibek,
    rating: 5,
  },
];

export const testimonialsData = testimonials;
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
          <h2 className="mb-4">
            Testimonials
          </h2>
          <p className="">
            Discover how leading companies achieve breakthrough results with our AI solutions
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

                {/* Bottom Section: Left -> Name, title, company; Right -> See more */}
                <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-[#2176C1] font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#6B7280] text-xs">{testimonial.title}</p>
                    <p className="text-[#FFC043] text-xs font-medium">{testimonial.company}</p>
                  </div>

                  <Link
                    to={`/testimonial/${testimonial.id}`}
                    className="cursor-pointer group/btn inline-flex items-center gap-2 text-[#2176C1] hover:text-[#185a96] font-medium text-sm transition-colors duration-200"
                  >
                    <span>See more</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Subtle hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                ></div>
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

                {/* Bottom Section: Left -> Name, title, company; Right -> See more */}
                <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-[#2176C1] font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#6B7280] text-xs">{testimonial.title}</p>
                    <p className="text-[#FFC043] text-xs font-medium">{testimonial.company}</p>
                  </div>

                  <Link
                    to={`/testimonial/${testimonial.id}`}
                    className="cursor-pointer group/btn inline-flex items-center gap-2 text-[#2176C1] hover:text-[#185a96] font-medium text-sm transition-colors duration-200"
                  >
                    <span>See more</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Subtle hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                ></div>
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
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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