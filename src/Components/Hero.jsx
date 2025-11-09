import robotHand from "../assets/robot.png";
import humanHand from "../assets/humanhand.png";
import logo from "../assets/Frame_17.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative mt-12 lg:mt-8 flex flex-col justify-center items-center overflow-hidden bg-[#c4d4f5] min-h-screen">
      {/* Decorative Hands */}
      <div className="absolute top-[-4%] left-0 w-[35%] sm:w-[30%] md:w-[28%] lg:w-[25%] xl:w-[35%] pointer-events-none z-20">
        <img
          src={humanHand}
          alt="Human hand"
          className="w-full h-auto animate-slide-in-left-slow"
        />
      </div>

      <div className="absolute bottom-[-15%] lg:bottom-[-4%] right-0 w-[35%] sm:w-[30%] md:w-[28%] lg:w-[25%] xl:w-[34%] pointer-events-none z-20">
        <img
          src={robotHand}
          alt="Robot hand"
          className="w-full h-auto animate-slide-in-right-slow"
        />
      </div>

      {/* Watermark Logo */}
      <div className="absolute inset-0  flex justify-center items-center z-10 opacity-20 animate-fade-up-after-hands">
        <img
          src={logo}
          id=""
          alt="Watermark Logo"
          className="w-[150px] sm:w-[200px] watermark-logo md:w-[250px] lg:w-[300px] bg-[#c4d4f5] select-none pointer-events-none"
        />
      </div>

      {/* Text Content */}
      <div className="relative mt-[220px] lg:mt-[180px] z-30 text-center max-w-5xl px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800 animate-fade-up-after-hands">
          Empower Your Business
          <br />
          <span
            className="inline-block animate-fade-up-after-hands-more"
            style={{ display: "inline-block" }}
          >
            with
          </span>
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-up-after-hands-more"
            style={{ animationDelay: "0.2s", display: "inline-block" }}
          >
            Next-Gen AI
          </span>
          <span
            className="animate-fade-up-after-hands-more"
            style={{ animationDelay: "0.3s", display: "inline-block" }}
          >
            {" "}
            and{" "}
          </span>
          <span
            className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fade-up-after-hands-more"
            style={{ animationDelay: "0.4s", display: "inline-block" }}
          >
            Automation
          </span>
        </h1>
      </div>

      {/* Paragraph and Button */}
      <div
        className="relative max-w-[230px] z-30 self-start ml-10 sm:ml-16 md:ml-18 lg:ml-26 mt-[-2%] sm:mt-[-1%] md:mt-[-2%] lg:mt-[1%] animate-fade-up-after-hands-more"
        style={{ opacity: 0 }}
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 leading-relaxed max-w-md">
          AI Chatbots, Scalable Backends and Automation for Every Industry.
        </p>

        <Button
          size="lg"
          variant="outline"
          className="px-4 py-4 text-base bg-[#c4d4f5] border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all rounded-lg group"
        >
          Request a Demo
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
