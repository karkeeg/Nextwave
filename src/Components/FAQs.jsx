import React, { useState } from "react";

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
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-[#fff] py-12 px-2">
      <h2
        className="text-3xl md:text-4xl font-bold text-[#2176C1] text-center mb-2"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-[#7B8591] text-base text-center mb-10"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Find answers to common questions about NextWaveAI, our services, and how
        we can help your business grow.
      </p>
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl mx-auto"
        style={{
          boxShadow: "0px 32px 80px 0px #0000001A",
        }}
      >
        {faqs.map((faq, idx) => (
          <div key={idx} className={`border-b last:border-b-0 transition-all`}>
            <button
              className="w-full flex items-center justify-between px-6 py-6 md:py-8 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span
                className="text-[#232B36] text-base md:text-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#232B36] transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
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
              </svg>
            </button>
            {openIndex === idx && (
              <div
                className="px-6 pb-6 md:pb-8 text-[#7B8591] text-base"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
          /* Responsive FAQ width and hide scrollbar */
          @media (max-width: 600px) {
            .max-w-3xl {
              max-width: 98vw !important;
            }
          }
          .max-w-3xl::-webkit-scrollbar { display: none; }
          .max-w-3xl { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
};

export default FAQs;
