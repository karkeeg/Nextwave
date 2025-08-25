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
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2176C1]">Frequently Asked Questions</h2>
          <p className="text-[#334155]/80 mt-3 text-base md:text-lg">Find answers to common questions about NextWaveAI, our services, and how we can help your business grow.</p>
        </div>

        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl ring-1 ring-black/5 divide-y divide-slate-200 overflow-hidden">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <button
                className="w-full flex items-center gap-4 justify-between px-5 md:px-7 py-5 md:py-7 text-left focus:outline-none hover:bg-white/60 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#2176C1] to-[#6BA8E5] text-white text-sm font-bold shadow-sm">{idx + 1}</span>
                  <span className="text-[#0f172a] text-base md:text-lg font-medium">{faq.question}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-[#334155] transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-6 md:pb-8 text-[#475569] text-base leading-relaxed">
                      {faq.answer}
                    </div>
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
