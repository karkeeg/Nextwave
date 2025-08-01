import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChartLine, FaBrain, FaComments, FaLanguage, FaRobot, FaArrowLeft } from "react-icons/fa";

const servicesData = {
  "data-science": {
    title: "Data Science & Predictive Analytics",
    subtitle: "Transform your data into actionable insights",
    desc: "Our data science and predictive analytics services help businesses unlock the full potential of their data. We combine advanced statistical methods, machine learning algorithms, and cutting-edge tools to deliver insights that drive strategic decision-making.",
    longDesc: "Data Science & Predictive Analytics is the cornerstone of modern business intelligence. Our comprehensive approach encompasses data collection, cleaning, analysis, and visualization to provide you with actionable insights that can transform your business operations.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification", 
      "Multilingual support and sentiment analysis",
      "Real-time data processing and analytics",
      "Predictive modeling and forecasting",
      "Interactive dashboards and reporting"
    ],
    benefits: [
      "Improved decision-making through data-driven insights",
      "Enhanced customer understanding and targeting",
      "Optimized business processes and efficiency",
      "Competitive advantage through predictive capabilities"
    ],
    icon: <FaChartLine size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "machine-learning": {
    title: "Machine Learning Engineering",
    subtitle: "Build intelligent systems that learn and adapt",
    desc: "Our machine learning engineering services focus on developing robust, scalable, and production-ready ML systems. We help organizations implement AI solutions that continuously learn and improve from data.",
    longDesc: "Machine Learning Engineering bridges the gap between research and production. We design, build, and deploy ML systems that are not only accurate but also reliable, scalable, and maintainable in real-world environments.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
      "Model development and training pipelines",
      "MLOps and model deployment",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Automated decision-making processes",
      "Scalable AI solutions for business growth",
      "Reduced operational costs through automation",
      "Enhanced product personalization"
    ],
    icon: <FaBrain size={32} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "nlp": {
    title: "Natural Language Processing (NLP)",
    subtitle: "Enable machines to understand human language",
    desc: "Our NLP services help businesses process, analyze, and generate human language at scale. From sentiment analysis to language translation, we build systems that understand context and meaning.",
    longDesc: "Natural Language Processing is revolutionizing how businesses interact with customers and process information. Our NLP solutions enable machines to understand, interpret, and generate human language with remarkable accuracy.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
      "Text classification and entity recognition",
      "Language translation and localization",
      "Document processing and information extraction"
    ],
    benefits: [
      "Improved customer service through automated responses",
      "Efficient document processing and analysis",
      "Global reach through multilingual capabilities",
      "Enhanced content understanding and categorization"
    ],
    icon: <FaLanguage size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "ai-chat": {
    title: "AI Chat Development",
    subtitle: "Create intelligent conversational experiences",
    desc: "Our AI chat development services create intelligent conversational agents that provide personalized, context-aware interactions. We build chatbots and virtual assistants that enhance customer engagement.",
    longDesc: "AI Chat Development is transforming customer service and user engagement. Our conversational AI solutions provide 24/7 support, personalized interactions, and seamless integration with existing business processes.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
      "Integration with CRM and business systems",
      "Voice and text-based interactions",
      "Analytics and conversation insights"
    ],
    benefits: [
      "24/7 customer support availability",
      "Reduced response times and improved satisfaction",
      "Scalable customer service operations",
      "Consistent and personalized interactions"
    ],
    icon: <FaComments size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  "ai-robotics": {
    title: "AI Robotics & Automation",
    subtitle: "Intelligent automation for the future",
    desc: "Our AI robotics and automation services combine artificial intelligence with robotic systems to create intelligent automation solutions. We help businesses optimize operations and increase efficiency.",
    longDesc: "AI Robotics & Automation represents the convergence of artificial intelligence and physical systems. Our solutions enable businesses to automate complex tasks, improve precision, and achieve operational excellence.",
    features: [
      "Custom conversational flows and personality design",
      "Advanced NLP engines and intent classification",
      "Multilingual support and sentiment analysis",
      "Robotic process automation (RPA)",
      "Computer vision and object recognition",
      "Autonomous system development"
    ],
    benefits: [
      "Increased operational efficiency and productivity",
      "Reduced human error and improved accuracy",
      "Cost savings through automation",
      "Enhanced safety in hazardous environments"
    ],
    icon: <FaRobot size={32} />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
};

  const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData[serviceId];

    const handleBackToServices = () => {
      navigate('/');
      // Scroll to services section after navigation
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                     <button
             onClick={handleBackToServices}
             className="text-[#2176C1] hover:text-[#185a96]"
           >
             Back to Services
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={handleBackToServices}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#2176C1] hover:text-[#185a96] mb-6 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 font-semibold"
        >
          <FaArrowLeft size={16} />
          Back to Services
        </button>

        {/* Main Service Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#2176C1] to-[#185a96] text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
                <p className="text-lg text-white/80">{service.subtitle}</p>
              </div>
            </div>
            <p className="text-white/90 max-w-3xl">
              {service.desc}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">About This Service</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.longDesc}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-5 h-5 bg-[#2176C1] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits</h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Image */}
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* CTA */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Let's discuss how our {service.title} can transform your business.
                  </p>
                  <button className="w-full bg-[#2176C1] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#185a96] transition-colors duration-300 text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(servicesData)
              .filter(([id]) => id !== serviceId)
              .map(([id, relatedService]) => (
                                 <button
                   key={id}
                   onClick={() => {
                     navigate(`/services/${id}`);
                     window.scrollTo(0, 0);
                   }}
                   className="text-left p-4 rounded-lg border border-gray-200 hover:border-[#2176C1] hover:bg-blue-50 transition-all duration-300 group"
                 >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#2176C1] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(relatedService.icon, { size: 16 })}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2176C1] transition-colors duration-300">
                      {relatedService.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{relatedService.subtitle}</p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 