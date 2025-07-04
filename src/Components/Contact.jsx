import React from "react";
import { FaPhoneAlt, FaFax, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section className="w-full min-h-screen bg-[#EFF6FF] flex flex-col justify-center">
    <div className="w-full flex flex-col md:flex-row max-w-6xl mx-auto py-16">
      {/* Left: Form */}
      <div className="flex-[2] px-8 md:px-16 py-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2176C1] mb-2 font-['Inter']">
          Contact Us
        </h2>
        <p className="text-[#7B8591] text-base mb-8 font-['Inter'] max-w-lg">
          Contact us to get connected with our team of experts. We are here to
          help you with your AI and software development needs.
        </p>
        <form className="w-full max-w-xl flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[#232B36] font-semibold" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              className="border border-[#E9EDF2] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2176C1] bg-white"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#232B36] font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="border border-[#E9EDF2] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2176C1] bg-white"
              type="email"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#232B36] font-semibold" htmlFor="phone">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              className="border border-[#E9EDF2] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2176C1] bg-white"
              type="tel"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#232B36] font-semibold" htmlFor="service">
              Select the service or industry
            </label>
            <select
              id="service"
              className="border border-[#E9EDF2] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2176C1] bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="ai-chat">AI Chat Development</option>
              <option value="financial">Financial Services</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#2176C1] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#185a96] transition"
          >
            Submit
          </button>
        </form>
        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row gap-8 mt-10 text-[#232B36] text-sm items-start md:items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl text-[#232B36]" />
            <div>
              <div className="font-semibold text-[#232B36]">PHONE</div>
              <a
                href="tel:+977123456789"
                className="text-[#2176C1] hover:underline"
              >
                +977 123456789
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaFax className="text-2xl text-[#232B36]" />
            <div>
              <div className="font-semibold text-[#232B36]">FAX</div>
              <span className="text-[#2176C1] font-medium">01 2345 6789</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-2xl text-[#232B36]" />
            <div>
              <div className="font-semibold text-[#232B36]">EMAIL</div>
              <a
                href="mailto:nextwaveai@gmail.com"
                className="text-[#2176C1] font-medium hover:underline"
              >
                nextwaveai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Small Centered Map */}
      <div className="flex flex-col items-center justify-center flex-1 w-full py-8">
        <div className="w-full flex justify-center">
          <div className="w-[420px] h-[360px] rounded-2xl overflow-hidden shadow-lg border border-[#E9EDF2] bg-white flex items-center justify-center">
            <iframe
              title="NextWaveAI Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.312329%2C27.6878%2C85.324329%2C27.6978&amp;layer=mapnik"
              className="w-full h-full"
              style={{ border: 0, minHeight: 200, background: "#fff" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
