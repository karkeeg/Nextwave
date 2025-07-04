import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiFlowerFill } from "react-icons/pi";
import bibek from "../assets/bibek.jpg";

const TeamCard = ({ img, name, title, desc }) => (
  <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center w-full sm:w-[260px] gap-4 hover:scale-[1.02] transition duration-300">
    <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover" />
    <div>
      <h3 className="font-semibold text-lg text-[#004AAD]">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
    <p className="text-xs text-gray-500 max-w-[220px]">{desc}</p>
    <div className="flex gap-3 text-[#004AAD] text-lg">
      <FaLinkedin className="hover:text-[#0A66C2] cursor-pointer" />
      <FaXTwitter className="hover:text-black cursor-pointer" />
      <PiFlowerFill className="hover:text-yellow-500 cursor-pointer" />
    </div>
  </div>
);

const AboutPage = () => {
  const teamMember = {
    img: bibek,
    name: "Judy Mante",
    title: "CEO & Founder",
    desc: "Alice leads with a vision for transformative technology and a passion for innovation.",
  };

  return (
    <section className="w-full">
      {/* Story Section */}
      <div className=" px-6 md:px-20 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-[#2171B6] text-center">
            Our Story & Mission
          </h2>
          <p
            className="text-center text-sm mt-2 text-gray-500 "
            style={{ fontSize: "16px" }}
          >
            Founded on innovation, powered by passion, and committed to
            excellence.
          </p>

          <div className="mt-12 flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#1F2937] pt-4">
                The Beginning
              </h3>
              <p
                className="text-sm text-gray-500 mb-8"
                style={{ fontSize: "16px" }}
              >
                In early 2025, a small group of engineers, designers, and
                futurists came together with a bold idea: to create technology
                that thinks with you, not just for you. Frustrated by
                disconnected systems and clunky user experiences, they
                envisioned a world where human- centric design seamlessly merged
                with intelligent automation. What started as a vision soon
                became a venture—rooted in empathy, driven by research, and
                powered by innovation.
              </p>

              <h3 className="text-3xl font-bold mb-4 text-[#1F2937] pt-4">
                Our Mission
              </h3>
              <p
                className="text-sm text-gray-500"
                style={{ fontSize: "16px" }}
              >
                We are dedicated to developing AI-driven solutions that are not
                only powerful but deeply personal—designed with empathy, guided
                by ethics, and built for real-world impact. From conversational
                interfaces to predictive systems, we craft technology that
                adapts, learns, and grows with its users.Because the next wave
                of innovation isn’t about machines replacing people. It’s about
                people and machines working beautifully together.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4"
                alt="Team at work"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#EAF3FF] px-6 md:px-20 py-10 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
            Our Team
          </h2>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
            Talented individuals united by shared values, working together to
            create meaningful impact.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className=" sm:col-span-2 lg:col-span-3">
              <TeamCard {...teamMember} />
            </div>
            <TeamCard {...teamMember} />
            <TeamCard {...teamMember} />
            <TeamCard {...teamMember} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
