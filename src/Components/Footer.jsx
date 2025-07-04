import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/nextwaveLogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2870B5] text-white px-6 md:px-12 xl:px-[72px] pt-[80px] pb-[32px]">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-[48px] xl:gap-[108px]">
        {/* Left Section */}
        <div className="w-full max-w-[342px] bg-[#F4F6F8] text-black rounded-[8px] px-6 py-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" />
            
          </div>
          <p className="text-sm leading-[20px]">
            Subscribe To Our NextWaveAI for exclusive deals, adventure tips and
            new service alerts
          </p>
          <div className="flex items-center gap-4 text-xl text-black">
            <FaXTwitter className="cursor-pointer hover:text-blue-600 transition duration-200" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600 transition duration-200" />
            <FaInstagram className="cursor-pointer hover:text-pink-600 transition duration-200" />
            <FaYoutube className="cursor-pointer hover:text-red-600 transition duration-200" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-between flex-1 gap-8 text-sm">
          {/* Quick Link */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <h3 className="font-semibold text-base">Quick Link</h3>
            <Link to="/about" className="hover:text-gray-300 transition">
              About us
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link to="/testimonials" className="hover:text-gray-300 transition">
              Testimonials
            </Link>
            <Link to="/industries" className="hover:text-gray-300 transition">
              Industries
            </Link>
            <Link to="/case-studies" className="hover:text-gray-300 transition">
              Case Studies
            </Link>
            <Link to="/research" className="hover:text-gray-300 transition">
              Research & Insights
            </Link>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <h3 className="font-semibold text-base">Customer Service</h3>
            <Link to="/faq" className="hover:text-gray-300 transition">
              FAQ
            </Link>
            <Link to="/privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <h3 className="font-semibold text-base">Contact Us</h3>
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
      <div className="mt-16 text-xm text-white  border-t border-white/20 ">
        Privacy and policy copyright ©2025, NEXTWAVEAI
      </div>
    </footer>
  );
};

export default Footer;
