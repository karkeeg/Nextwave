import { FaChartLine, FaBrain, FaLanguage, FaComments, FaRobot, FaGlobe, FaMobileAlt } from "react-icons/fa";
import service1 from '../assets/files/service1.avif';
import service2 from '../assets/files/service2.avif';
import service3 from '../assets/files/service3.avif';
import service4 from '../assets/files/service4.webp';
import service5 from '../assets/files/service5.avif';
import service6 from '../assets/files/service6.avif';

const services = [
  {
    id: "data-science",
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
    icon: FaChartLine,
    image: service1,
  },
  {
    id: "machine-learning",
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
    icon: FaBrain,
    image: service2,
  },
  {
    id: "nlp",
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
    icon: FaLanguage,
    image: service3,
  },
  {
    id: "ai-chat",
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
    icon: FaComments,
    image: service4,
  },
  {
    id: "ai-robotics",
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
    icon: FaRobot,
    image: service5,
  },
  {
    id: "web-dev",
    title: "Website Development",
    subtitle: "Modern, fast, and SEO-friendly websites",
    desc: "We build responsive, performant websites using React/Next.js, with accessibility and Core Web Vitals baked in.",
    longDesc: "From landing pages to complex product sites, we deliver pixel-perfect, scalable websites. Our builds emphasize accessibility (WCAG), SEO best practices, and Lighthouse performance, with modern stacks like Next.js, Tailwind CSS, and headless CMS integrations.",
    features: [
      "Responsive UI and component design",
      "SEO and Core Web Vitals optimization",
      "Headless CMS and API integrations",
      "Analytics, A/B testing, and tracking",
      "CI/CD and edge caching setup",
    ],
    benefits: [
      "Higher conversion and engagement",
      "Better organic reach via technical SEO",
      "Faster iteration with modular components",
      "Maintainable, scalable architecture",
    ],
    icon: FaGlobe,
    image: service5,
  },
  {
    id: "app-dev",
    title: "App Development",
    subtitle: "Cross‑platform mobile apps that scale",
    desc: "Build and ship high-quality iOS and Android apps with React Native and robust backend services.",
    longDesc: "We craft cross-platform apps with native performance using React Native and modern tooling. From auth and secure APIs to offline-first experiences and push notifications, we cover product from MVP to scale.",
    features: [
      "Single codebase for iOS and Android",
      "Offline-first, push notifications, deep links",
      "Secure auth (OAuth, JWT) and analytics",
      "Native modules and device integrations",
      "Automated testing and app store delivery",
    ],
    benefits: [
      "Faster time-to-market",
      "Reduced development costs",
      "Consistent UX across platforms",
      "Observability and crash analytics",
    ],
    icon: FaMobileAlt,
    image: service6,
  },
];

export default services;