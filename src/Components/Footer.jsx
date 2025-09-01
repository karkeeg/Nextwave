import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/nextwaveLogo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Smooth scroll to section with route awareness
  const scrollToSection = (sectionId) => {
    const headerOffset = 60;
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || window.pageYOffset) + rect.top ;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#2870B5] text-white px-6 md:px-12 xl:px-[72px] pt-[80px] pb-[32px]">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-[48px] xl:gap-[108px]">
        {/* Left Section */}
        <div className="w-full max-w-[342px] bg-[#F4F6F8] text-black rounded-[8px] px-6 py-6 flex flex-col gap-6">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt=""
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm leading-[20px]">
            Subscribe To Our NextWaveAI for exclusive deals, adventure tips and
            new service alerts
          </p>
          <div className="flex items-center gap-4 text-xl text-black">
            <Link to="https://twitter.com/nextwaveai" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="cursor-pointer hover:text-blue-600 transition duration-200" />
            </Link>
            <Link to="https://www.linkedin.com/company/nxt-wave-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-600 transition duration-200" />
            </Link>
            <Link to="https://www.instagram.com/nextwaveai/"  target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-pink-600 transition duration-200" />
              </Link>
            <Link to="https://www.youtube.com/@nextwaveai" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="cursor-pointer hover:text-red-600 transition duration-200" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-between flex-1 gap-8 text-sm">
          {/* Quick Link */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <p className="font-semibold text-gray-900 ">Quick Link</p>
            {/* <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none cursor-pointer"
            >
              About us
            </button> */}
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none  cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none  cursor-pointer"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none  cursor-pointer"
            >
              Research & Insights
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none  cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <p className="font-semibold text-gray-900">Customer Service</p>
            <button
              onClick={() => scrollToSection("faqs")}
              className="hover:text-gray-300 transition text-left bg-transparent border-none  cursor-pointer"
            >
              FAQ
            </button>
            <Link
              to="/privacy-policy"
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <p className="font-semibold text-gray-900 ">Contact Us</p>
            <div className="flex items-start gap-2">
              <MdLocationOn className="mt-0.5" />{" "}
              <span>123 Street, Kathmandu Nepal</span>
            </div>
            <div className="flex items-start gap-2">
              <MdPhone className="mt-0.5" /> <span>+977 9876543210</span>
            </div>
            <div className="flex items-start gap-2">
              <MdEmail className="mt-0.5" /> <span>nextwaveai@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="mt-16 text-lg text-white  border-t border-white/20 ">
        Privacy and policy copyright ©2025, NEXTWAVEAI
      </div>
    </footer>
  );
};

export default Footer;
