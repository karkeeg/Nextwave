// blogData.js
import blog1 from "../assets/files/blog1.avif";
import blog2 from "../assets/files/blog2.avif";
import blog3 from "../assets/files/blog3.avif";
import blog4 from "../assets/files/blog4.avif";
import blog5 from "../assets/files/blog5.avif";

const blogData = [
  {
    id: 1,
    author: "Rob West",
    category: "AI",
    date: "2025-07-01",
    title: "Introducing NextWaveAI: The Future of Intelligent Solutions",
    desc: "Discover how NextWaveAI is revolutionizing industries with cutting-edge AI technology and innovative solutions.",
    image:
      blog1,
    content: `NextWaveAI is leading the way in intelligent solutions.

Our mission is to provide innovative AI tools that empower businesses worldwide to harness data like never before.

With machine learning, natural language processing, and computer vision, we are creating smarter workflows and better decision-making processes.

Stay tuned for upcoming features and industry partnerships that will transform the way you work.`,
  },
  {
    id: 2,
    author: "Sara Lee",
    category: "Education",
    date: "2025-07-05",
    title: "5 Ways AI is Changing the Education Sector",
    desc: "Explore how artificial intelligence is transforming teaching and learning for the better.",
    image: blog2,
    content: `Artificial intelligence is reshaping education by enabling personalized learning experiences tailored to each student's needs.

Automated grading systems help teachers save time on administrative tasks.

Virtual tutors and chatbots provide round-the-clock assistance to learners.

AI-driven analytics identify knowledge gaps and recommend customized study plans.

The future of education is smarter, more inclusive, and more effective thanks to AI.`,
  },
  {
    id: 3,
    author: "Mark Thompson",
    category: "Technology",
    date: "2025-07-10",
    title: "The Rise of Edge Computing in 2025",
    desc: "Edge computing is accelerating data processing closer to the source. Here's what it means for businesses.",
    image: blog3,
    content: `Edge computing brings computation and data storage closer to where it is needed to improve response times and save bandwidth.

This is critical for applications like IoT, autonomous vehicles, and smart cities.

By processing data locally, businesses reduce latency and enhance privacy and security.

As 5G networks expand, edge computing adoption is expected to skyrocket.

Companies that embrace edge computing will gain a competitive edge in speed and reliability.`,
  },
  {
    id: 4,
    author: "Linda Garcia",
    category: "Health",
    date: "2025-07-12",
    title: "How AI is Revolutionizing Healthcare Diagnostics",
    desc: "AI-powered tools are helping doctors diagnose diseases faster and more accurately.",
    image: blog4,
    content: `Artificial intelligence assists healthcare professionals by analyzing medical images, lab results, and patient histories.

Deep learning algorithms detect anomalies in X-rays and MRIs with remarkable precision.

AI systems can predict disease outbreaks and patient risks based on vast datasets.

This technology reduces diagnostic errors and expedites treatment plans.

Ultimately, AI enables more personalized and effective patient care.`,
  },
  {
    id: 5,
    author: "James Carter",
    category: "Business",
    date: "2025-07-15",
    title: "Leveraging AI for Smarter Business Decisions",
    desc: "Discover how AI-driven analytics are transforming decision-making processes in modern enterprises.",
    image: blog5,
    content: `Data-driven decision-making is now powered by artificial intelligence.

AI algorithms analyze market trends, customer behavior, and operational metrics to provide actionable insights.

Businesses can automate forecasting, inventory management, and risk assessments.

By leveraging AI, companies reduce guesswork and improve efficiency.

This leads to smarter strategies and better outcomes in a competitive marketplace.`,
  },
];

export default blogData;
