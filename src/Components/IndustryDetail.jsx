import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaGraduationCap,
  FaLaptopCode,
  FaHospital,
  FaIndustry,
  FaArrowLeft,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const industriesData = {
  "financial-services": {
    title: "Financial Services",
    subtitle: "AI-powered financial solutions for modern banking",
    desc: "Transform your financial operations with AI-powered solutions that enhance security, automate processes, and provide personalized insights for better decision-making.",
    features: [
      "Fraud detection and prevention systems",
      "AI-driven risk assessment and analysis",
      "Personalized financial insights and recommendations",
      "Automated customer support and chatbots",
      "Real-time transaction monitoring",
      "Predictive analytics for investment strategies",
    ],
    benefits: [
      "Enhanced security and fraud prevention",
      "Improved customer experience and satisfaction",
      "Reduced operational costs and increased efficiency",
      "Better risk management and compliance",
    ],
    icon: <FaBuilding size={32} />,
    image:
      "https://images.unsplash.com/photo-1556742400-b5da35d32d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  education: {
    title: "Education",
    subtitle: "Intelligent learning solutions for the digital age",
    desc: "Revolutionize learning experiences with intelligent educational technology that adapts to individual needs and enhances student engagement and outcomes.",
    features: [
      "E-learning platforms and virtual classrooms",
      "Smart assessment and grading systems",
      "Course recommendation engines",
      "Student performance analytics",
      "Personalized learning paths",
      "AI-powered tutoring and support",
    ],
    benefits: [
      "Personalized learning experiences for students",
      "Improved student engagement and retention",
      "Streamlined administrative processes",
      "Better educational outcomes and performance",
    ],
    icon: <FaGraduationCap size={32} />,
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  healthcare: {
    title: "Healthcare",
    subtitle: "AI-driven healthcare solutions for better patient care",
    desc: "Advance healthcare delivery with AI solutions that improve diagnosis accuracy, streamline patient care, and enhance medical research capabilities.",
    features: [
      "Medical image analysis and diagnosis",
      "Patient data management and analytics",
      "Drug discovery and development",
      "Telemedicine and remote monitoring",
      "Predictive healthcare analytics",
      "Automated medical documentation",
    ],
    benefits: [
      "Improved diagnosis accuracy and patient outcomes",
      "Streamlined patient care and administrative processes",
      "Enhanced medical research and drug development",
      "Better resource allocation and cost management",
    ],
    icon: <FaHospital size={32} />,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  technology: {
    title: "Technology",
    subtitle: "Cutting-edge AI solutions for tech infrastructure",
    desc: "Empower your technology infrastructure with cutting-edge AI solutions that optimize performance, enhance security, and drive innovation.",
    features: [
      "Cloud infrastructure optimization",
      "Cybersecurity and threat detection",
      "Software development automation",
      "IT service management",
      "Data center optimization",
      "DevOps and CI/CD automation",
    ],
    benefits: [
      "Optimized infrastructure performance and efficiency",
      "Enhanced cybersecurity and threat protection",
      "Streamlined development and deployment processes",
      "Improved service delivery and customer satisfaction",
    ],
    icon: <FaLaptopCode size={32} />,
    image:
      "https://images.unsplash.com/photo-1581093588401-22a9a2a60c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  manufacturing: {
    title: "Manufacturing",
    subtitle: "Intelligent automation for modern manufacturing",
    desc: "Optimize manufacturing processes with intelligent automation solutions that increase efficiency, reduce costs, and improve product quality.",
    features: [
      "Predictive maintenance systems",
      "Quality control automation",
      "Supply chain optimization",
      "Production planning and scheduling",
      "Robotic process automation",
      "Energy consumption optimization",
    ],
    benefits: [
      "Increased production efficiency and productivity",
      "Reduced operational costs and downtime",
      "Improved product quality and consistency",
      "Better resource utilization and sustainability",
    ],
    icon: <FaIndustry size={32} />,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
};

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const industry = industriesData[industryId];

  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} | NextWave AI`;
    } else {
      document.title = "Industry Not Found | NextWave AI";
    }

    return () => {
      document.title = "NextWave AI";
    };
  }, [industry]);

  const handleBackToIndustries = () => {
    navigate("/");
    setTimeout(() => {
      const industriesSection = document.getElementById("industries");
      if (industriesSection) {
        industriesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Industry Not Found
          </h1>
          <button
            onClick={handleBackToIndustries}
            className="text-[#2176C1] hover:text-[#185a96]"
          >
            Back to Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {industry
            ? `${industry.title} | NextWave AI`
            : "Industry Not Found | NextWave AI"}
        </title>
        <meta
          name="description"
          content={industry?.desc || "Industry details not found"}
        />
        <meta
          property="og:title"
          content={`${industry?.title || "Industry"} | NextWave AI`}
        />
        <meta
          property="og:description"
          content={industry?.desc || "Industry details not found"}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://nextwaveai-8.vercel.app/industries/${industryId}`}
        />
        <meta
          name="keywords"
          content={`${industry.title},${industry.features},${industry.benefits} ,AI, Technology, NextWave AI`}
        />
      </Helmet>

      {/* Back Button */}
      <button
        onClick={handleBackToIndustries}
        className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#2176C1] hover:text-[#185a96] mb-6 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 font-semibold"
      >
        <FaArrowLeft size={16} />
        Back to Industries
      </button>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2176C1] to-[#185a96] text-white p-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              {industry.icon}
            </div>
            <div>
              <h2 className="text-white font-bold">{industry.title}</h2>
              <p className="text-white/80">{industry.subtitle}</p>
            </div>
          </div>
          <p className="text-white/90">{industry.desc}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Key Solutions
                </h2>
                <div className="space-y-2">
                  {industry.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Benefits
                </h2>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-4">
                  Let's discuss how our AI solutions can transform your{" "}
                  {industry.title} operations.
                </p>
                <button className="w-full bg-[#2176C1] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#185a96] transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetail;
