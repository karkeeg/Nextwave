import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does NextWaveAI do?",
    answer:
      "NextWaveAI builds AI-powered chatbots, scalable backend systems, and automation solutions for businesses across industries. We help companies streamline operations and enhance customer engagement using the latest in artificial intelligence.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our solutions are designed for startups, SMEs, and enterprises looking to automate workflows, improve customer support, or scale their digital infrastructure. We work with clients in finance, healthcare, retail, education, and more.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow industry best practices for data security, including encryption, secure APIs, and compliance with GDPR and other regulations. Your data is always protected and handled with strict confidentiality.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes! Our team specializes in seamless integrations with CRMs, ERPs, messaging platforms, and other business tools to ensure your workflows remain uninterrupted.",
  },
  {
    question: "How do I get started with NextWaveAI?",
    answer:
      "Simply contact us through our website or request a free consultation. Our experts will assess your needs and propose a tailored solution for your business.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#E2EAFD] via-[#E2EAFD] to-[#9DB5E8] py-14 px-3">
      <div className="w-full faq-section max-w-4xl mx-auto">
        <div className="text-center lg:mb-12 mb-2 px-4">
          <h2 >
            Frequently Asked Questions
          </h2>
          <p className=" mt-3 ">
            Find answers to common questions about NextWaveAI, our services, and
            how we can help your business grow.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-2xl ring-1 ring-black/5 divide-y divide-slate-200 overflow-hidden">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full flex items-center gap-4 justify-between px-5 md:px-7 py-5 md:py-7 text-left focus:outline-none transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "bg-white/90 text-blue-600 font-semibold shadow-[0_0_15px_rgba(33,118,193,0.3)] border-l-4 border-blue-500"
                    : "hover:bg-white/70 text-gray-800"
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold shadow-md transition-all duration-300 ${
                      openIndex === idx
                        ? "bg-gradient-to-r from-[#2176C1] to-[#6BA8E5] shadow-[0_0_12px_rgba(33,118,193,0.6)]"
                        : "bg-gradient-to-r from-gray-400 to-gray-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-[#0f172a] text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                </div>
                <motion.svg
                  initial={false}
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-5 h-5 transition-colors duration-300 ${
                    openIndex === idx ? "text-blue-600 drop-shadow-sm" : "text-[#334155]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 md:px-7 pb-5 md:pb-7 bg-gradient-to-r from-blue-50 to-blue-100/70 text-gray-700 rounded-b-xl shadow-inner"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
