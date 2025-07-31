import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaBrain, FaComments, FaLanguage, FaRobot } from "react-icons/fa";

const services = [
  {
    id: "data-science",
    title: "Data Science & Predictive Analytics",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaChartLine size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "machine-learning",
    title: "Machine Learning Engineering",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaBrain size={24} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaLanguage size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "ai-chat",
    title: "AI Chat Development",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaComments size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "ai-robotics",
    title: "AI Robotics & Automation",
    desc: "Create intelligent conversational experiences with our advanced AI chatbot development services, powered by the latest in NLP and machine learning.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
    ],
    icon: <FaRobot size={24} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="w-full min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2176C1] mb-2">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized technical solutions that power modern businesses with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2176C1] rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                
                <ol className="space-y-2 text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#2176C1] font-bold text-sm mt-1">
                        {idx + 1}.
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ol>
                
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="inline-flex items-center gap-2 text-[#2176C1] font-semibold hover:text-[#185a96] transition-colors duration-300 group"
                >
                  Learn more
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M8 12h8m0 0-3.5-3.5M16 12l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative group cursor-pointer" onClick={() => handleServiceClick(service.id)}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
