import {
  FaBuilding,
  FaGraduationCap,
  FaHospital,
  FaLaptopCode,
  FaIndustry,
} from "react-icons/fa";
import industy101 from "../assets/files/industry1.1.avif";
import industy102 from "../assets/files/industry1.2.avif";
import industy103 from "../assets/files/insustry1.3.avif";
import industy201 from "../assets/files/industry2.1.avif";
import industy202 from "../assets/files/industry2.2.avif";
import industy203 from "../assets/files/industry2.3.avif";
import industy301 from "../assets/files/industry3.1.avif";
import industy302 from "../assets/files/industry3.2.avif";
import industy303 from "../assets/files/industry3.3.avif";
import industy402 from "../assets/files/industry4.2.avif";
import industy401 from "../assets/files/industry4.1.avif";
import industy403 from "../assets/files/industry4.3.avif";
import industy501 from "../assets/files/industry5.1.avif";
import industy502 from "../assets/files/industry5.2.avif";
import industy503 from "../assets/files/industry5.3.avif";

const industries = {
  "financial-services": {
    id: "financial-services",
    title: "Financial Services",
    images: [industy101, industy102, industy103],
    featuresList: [
      ["Fraud detection", "AI-driven risk assessment"],
      ["Personalized financial insights", "Automated customer support"],
    ],
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
    icon: FaBuilding,
    image: industy103,
  },

  education: {
    id: "education",
    title: "Education",
    images: [industy201, industy202, industy203],
    featuresList: [
      ["E-learning platforms", "Virtual classrooms"],
      ["Smart assessments", "Course recommendation engines"],
    ],
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
    icon: FaGraduationCap,
    image: industy203,
  },

  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    images: [industy301, industy302, industy303],
    featuresList: [
      ["Medical image analysis", "Predictive healthcare"],
      ["Patient data management", "Telemedicine solutions"],
    ],
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
    icon: FaHospital,
    image: industy303,
  },

  technology: {
    id: "technology",
    title: "Technology",
    images: [industy401, industy402, industy403],
    featuresList: [
      ["Cloud infrastructure", "Managed IT services"],
      ["Cybersecurity solutions", "Software support"],
    ],
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
    icon: FaLaptopCode,
    image: industy403,
  },

  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing",
    images: [industy501, industy502, industy503],
    featuresList: [
      ["Predictive maintenance", "Quality automation"],
      ["Supply chain optimization", "Production planning"],
    ],
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
    icon: FaIndustry,
    image: industy503,
  },
};

export default industries;
