import React from "react";
import { FaTags } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const data = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFC043]">
        <FaTags size={20} color="#fff" />
      </span>
    ),
    percent: "30%",
    title: "Cost Savings",
    desc: "Reduction in operational costs through automation",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFC043]">
        <FiClock size={20} color="#fff" />
      </span>
    ),
    percent: "100%",
    title: "24/7 Support",
    desc: "Always-on AI assistance for your customers",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFC043]">
        <FaUsers size={20} color="#fff" />
      </span>
    ),
    percent: "90%",
    title: "User Engagement",
    desc: "Increase in user engagement with AI solutions",
  },
];

const HomepageData = ({
  cardClassName = "flex-1 min-w-[280px] max-w-xs bg-white rounded-xl border border-[#E9EDF2] shadow-[0_0_0_4px_rgba(233,237,242,0.5)] px-6 py-6 flex flex-col gap-3",
  percentClassName = "text-3xl font-bold text-[#232B36]",
  titleClassName = "text-lg font-semibold text-[#232B36] mb-1",
  descClassName = "text-sm ",
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center my-10">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={cardClassName}
          style={{ boxShadow: "0px 4px 24px 0px #E9EDF2" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>{item.icon}</div>
            <div className={percentClassName}>{item.percent}</div>
          </div>
          <div className={titleClassName}>{item.title}</div>
          <div
            className={descClassName}
            style={{
              color: "var(--Text-Secondary, #6B7280)",
              marginTop: "8px",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomepageData;
