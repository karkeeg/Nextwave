import React from "react";
import { FaRobot } from "react-icons/fa6";

const services = [
  {
    title: "AI Chat Development",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#2176C1] text-white mr-3">
        <FaRobot size={24} />
      </span>
    ),
  },
  {
    title: "AI Chat Development",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#2176C1] text-white mr-3">
        <FaRobot size={24} />
      </span>
    ),
  },
  {
    title: "AI Chat Development",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#2176C1] text-white mr-3">
        <FaRobot size={24} />
      </span>
    ),
  },
  {
    title: "AI Chat Development",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-[#2176C1] text-white mr-3">
        <FaRobot size={24} />
      </span>
    ),
  },
];

const Services = () => (
  <section className="w-full min-h-screen bg-white py-10 px-2 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] text-center mb-2 font-['Inter']">
      Our Services
    </h2>
    <p className="text-[#7B8591] text-base text-center mb-12 font-['Inter']">
      Specialized technical solutions that power modern businesses with
      cutting-edge technology.
    </p>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-[#F8FAFC] rounded-2xl shadow-md border border-[#E9EDF2] p-8 flex flex-col min-h-[320px] transition hover:shadow-lg"
        >
          <div className="flex items-center mb-4">
            {service.icon}
            <span className="text-xl md:text-2xl font-bold text-[#232B36] font-['Inter']">
              {service.title}
            </span>
          </div>
          <p className="text-[#7B8591] text-base mb-4 font-['Inter']">
            {service.desc}
          </p>
          <ul className="text-[#232B36] text-sm mb-6 font-['Inter'] list-decimal list-inside space-y-1 pl-2">
            {service.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <button className="flex items-center gap-2 text-[#2176C1] font-medium mt-auto hover:underline group">
            Learn more
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M8 12h8m0 0-3.5-3.5M16 12l-3.5 3.5"
                  stroke="#2176C1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
