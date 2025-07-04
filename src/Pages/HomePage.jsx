import React from "react";
import HomepageData from "../Components/HomepageData";

const HomePage = () => {
  return (
    <main className="w-full bg-white font-['Inter']">
      {/* Hero Section */}
      <section className="w-full min-h-[480px] flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12 lg:px-32 py-8 md:py-12">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#232B36] mb-4">
            Empower <span className="text-[#FFC043]">Your</span> Business
            <br />
            with <span className="text-[#2176C1]">Next-Gen AI</span> &amp;
            <br />
            <span className="text-[#2176C1]">Automation</span>
          </h1>
          <p className="text-base sm:text-lg text-[#7B8591] mb-8">
            AI Chatbots, Scalable Backends &amp; Automation for Every Industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="bg-[#232B36] text-white font-semibold px-8 py-3 rounded-md border-2 border-[#2176C1] hover:bg-[#2176C1] hover:text-white transition text-base w-full sm:w-auto">
              Get a Free Consultation
            </button>
            <button className="text-[#2176C1] font-semibold px-8 py-3 rounded-md border-2 border-[#2176C1] hover:bg-[#2176C1] hover:text-white transition text-base w-full sm:w-auto">
              Request a demo
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Video */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <div
            className="bg-[#E9EDF2] rounded-2xl shadow-lg overflow-hidden border border-[#E9EDF2] flex items-center justify-center w-full"
            style={{
              aspectRatio: "16/9",
              maxWidth: 540,
              width: "100%",
              minWidth: 0,
            }}
          >
            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/*
            // For own local video we can use this line of code:
            <video
              className="w-full h-full object-cover"
              controls
              poster=""
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="w-full flex justify-center items-start px-2 sm:px-4 md:px-12 lg:px-32 pb-8 md:pb-12">
        <div className="w-full max-w-7xl">
          <HomepageData
            cardClassName="flex-1 min-w-[220px] max-w-full sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10"
            percentClassName="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232B36]"
            titleClassName="text-lg sm:text-xl md:text-2xl font-semibold text-[#232B36] mb-1"
            descClassName="text-sm sm:text-base md:text-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
