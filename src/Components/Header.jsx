import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nextwaveLogo.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    services: false,
    industries: false,
  });

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setDropdownOpen(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="bg-white border-b border-gray/20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-[24px] py-4">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-md text-[#7B8591]">
          {/* Services Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => toggleDropdown(0)}
              className="font-medium hover:text-blue-600 transition"
            >
              Services ▾
            </button>
            {dropdownOpen === 0 && (
              <div className="absolute top-full mt-2 bg-white border rounded shadow-md w-48 z-20">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#232B36]"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#232B36]"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#232B36]"
                >
                  FAQs
                </button>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => toggleDropdown(1)}
              className="font-medium hover:text-blue-600 transition"
            >
              Industries ▾
            </button>
            {dropdownOpen === 1 && (
              <div className="absolute top-full mt-2 bg-white border rounded shadow-md w-48 z-20">
                <button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#232B36]"
                >
                  Industries We Serve
                </button>
                <Link
                  to="/industry-served"
                  className="block px-4 py-2 hover:bg-gray-100 text-[#232B36]"
                >
                  Industry Details
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="font-medium hover:text-blue-600 transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="font-medium hover:text-blue-600 transition"
          >
            Research & Insights
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium hover:text-blue-600 transition"
          >
            Contact
          </button>

          <Link
            to="/get-started"
            className="ml-4 bg-[#2176C1] text-white font-bold px-5 py-2.5 rounded hover:bg-[#1761a0] shadow-sm transition"
          >
            Get a free Consultant
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-white border-t text-[#7B8591] text-base">
          {/* Services dropdown */}
          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  services: !prev.services,
                }))
              }
              className="w-full text-left font-medium hover:text-blue-600"
            >
              Services ▾
            </button>
            {mobileDropdown.services && (
              <div className="ml-4 mt-1 space-y-1">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left hover:text-blue-600"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left hover:text-blue-600"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left hover:text-blue-600"
                >
                  FAQs
                </button>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  industries: !prev.industries,
                }))
              }
              className="w-full text-left font-medium hover:text-blue-600"
            >
              Industries ▾
            </button>
            {mobileDropdown.industries && (
              <div className="ml-4 mt-1 space-y-1">
                <button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left hover:text-blue-600"
                >
                  Industries We Serve
                </button>
                <Link
                  to="/industry-served"
                  className="block hover:text-blue-600"
                >
                  Industry Details
                </Link>
              </div>
            )}
          </div>

          {/* Static Items */}
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left hover:text-blue-600"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="block w-full text-left hover:text-blue-600"
          >
            Research & Insights
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left hover:text-blue-600"
          >
            Contact
          </button>

          {/* CTA */}
          <Link
            to="/get-started"
            className="block w-full bg-[#2176C1] text-white text-center py-2 rounded hover:bg-[#1761a0]"
          >
            Get a free Consultant
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
