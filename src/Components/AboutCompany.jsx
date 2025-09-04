import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiFlowerFill } from "react-icons/pi";
import bibek from "../assets/bibek.jpg";

const TeamCard = ({ img, name, title, desc }) => (
  <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center w-full sm:w-[250px] gap-4
      hover:scale-[1.05] hover:shadow-lg transition-transform duration-300 cursor-pointer">
    <img
      src={img}
      alt={name}
      className="w-24 h-24 rounded-full object-cover border-4 border-[#EAF3FF]"
    />
    <div>
      <h3 className="font-semibold text-lg text-[#004AAD]">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
    <p className="text-xs text-gray-500 max-w-[220px] leading-relaxed">{desc}</p>
    <div className="flex gap-3 text-[#004AAD] text-lg">
      <FaLinkedin className="hover:text-[#0A66C2] cursor-pointer transition" />
      <FaXTwitter className="hover:text-black cursor-pointer transition" />
      <PiFlowerFill className="hover:text-yellow-500 cursor-pointer transition" />
    </div>
  </div>
);

const AboutPage = () => {
  const ceo = {
    img: bibek,
    name: "Judy Mante",
    title: "CEO & Founder",
    desc:
      "Judy leads with a vision for transformative technology and a passion for innovation.",
  };

  const teamMembers = [
    {
      img: bibek,
      name: "Rahul Tamang",
      title: "CTO",
      desc:
        "Rahul architects powerful AI systems and guides the tech strategy behind NextWaveAI.",
    },
    {
      img: bibek,
      name: "Sara Bista",
      title: "Head of Design",
      desc:
        "Sara crafts intuitive experiences that turn cutting-edge tech into elegant products.",
    },
    {
      img: bibek,
      name: "Aayush Sharma",
      title: "Lead Engineer",
      desc:
        "Aayush turns ambitious ideas into reality with code that’s clean, scalable, and fast.",
    },
  ];

  return (
    <section className="w-full">
      {/* Story Section */}
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold text-[#2171B6] text-center">Our Story & Mission</h2>
          <p className="text-center text-base mt-2 text-gray-500">
            Founded on innovation, powered by passion, and committed to excellence.
          </p>

          <div className="mt-12 flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#1F2937] pt-4">The Beginning</h3>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                In early 2025, a small group of engineers, designers, and futurists came together
                with a bold idea: to create technology that thinks with you, not just for you...
                What started as a vision soon became a venture—rooted in empathy, driven by
                research, and powered by innovation.
              </p>

              <h3 className="text-3xl font-bold mb-4 text-[#1F2937] pt-4">Our Mission</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We are dedicated to developing AI-driven solutions that are not only powerful but
                deeply personal—designed with empathy, guided by ethics, and built for real-world
                impact. Because the next wave of innovation isn’t about machines replacing people.
                It’s about people and machines working beautifully together.
              </p>
            </div>

            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4"
                alt="Team at work"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CEO Highlight Section */}
      <div className="bg-[#EAF3FF] px-6 md:px-20 py-16 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-8 text-center">
            Meet Our CEO & Founder
          </h2>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 cursor-pointer">
            <img
              src={ceo.img}
              alt={ceo.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#2176C1]"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl text-[#004AAD] mb-2">{ceo.name}</h3>
              <p className="text-lg font-semibold text-[#2176C1] mb-4">{ceo.title}</p>
              <p className="text-gray-600 max-w-xl">{ceo.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 md:px-20 py-10 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">Our Team</h2>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
            Talented individuals united by shared values, working together to create meaningful impact.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
