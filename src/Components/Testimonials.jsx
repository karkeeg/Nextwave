import React from "react";
import bibek from "../assets/bibek.jpg"; // Use your avatar image

const testimonials = [
  {
    name: "Rob West",
    title: "CEO at NextWaveAI",
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”`,
    avatar: bibek,
    isVideo: false,
  },
  {
    name: "Rob West",
    title: "CEO at NextWaveAI",
    text: "",
    avatar: bibek,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isVideo: true,
  },
  {
    name: "Rob West",
    title: "CEO at NextWaveAI",
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”`,
    avatar: bibek,
    isVideo: false,
  },
  {
    name: "Rob West",
    title: "CEO at NextWaveAI",
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”`,
    avatar: bibek,
    isVideo: false,
  },
];

const cardStyle = {
  width: 321,
  height: 467,
  paddingTop: 23,
  paddingRight: 31,
  paddingBottom: 23,
  paddingLeft: 31,
  justifyContent: "space-between",
  flex: "0 0 auto",
};

const Testimonials = () => (
  <section
    className="w-full flex flex-col items-center bg-[#FAFBFC]"
    style={{
      width: "100%",
      minHeight: 700,
      margin: "0 auto",
      paddingTop: 64,
      paddingBottom: 50,
    }}
  >
    <h2
      className="text-3xl md:text-4xl font-bold text-[#2176C1] text-center mb-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Testimonial
    </h2>
    <p
      className="text-[#7B8591] text-base md:text-lg text-center mb-16"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Don’t take our word for it! Hear it from our Partners
    </p>
    <div
      className="w-full max-w-[1200px] overflow-x-auto"
      style={{
        minHeight: 467,
        padding: "20px 0",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        className="flex gap-6 md:gap-10 px-4 md:px-0"
        style={{
          minWidth: 0,
          width: "max-content",
        }}
      >
        {testimonials.map((t, i) =>
          t.isVideo ? (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end"
              style={{
                ...cardStyle,
                background: "#232B36",
                margin: "0 8px",
                position: "relative",
                minWidth: 280,
                width: 320,
                height: 380,
              }}
            >
              <div className="absolute top-6 left-6 z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </div>
              <iframe
                src={t.video}
                title="Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-3xl"
                style={{ zIndex: 0, border: "none" }}
              ></iframe>
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-4 shadow z-20"
                aria-label="Play video"
                tabIndex={-1}
                style={{ pointerEvents: "none" }}
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="16" fill="#2176C1" />
                  <polygon points="13,10 24,16 13,22" fill="#fff" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <div
                  className="font-bold text-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-sm text-[#FFC043]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.title}
                </div>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="bg-[#F4F8FE] rounded-3xl shadow-lg flex flex-col"
              style={{
                ...cardStyle,
                margin: "0 8px",
                minWidth: 280,
                width: 320,
                height: 380,
              }}
            >
              <div>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mb-6"
                />
                <p
                  className="italic text-[#232B36] text-base mb-8"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.text}
                </p>
              </div>
              <div>
                <div
                  className="font-bold text-lg text-[#2176C1]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-sm text-[#FFC043]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.title}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Testimonials;
