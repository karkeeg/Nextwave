import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/nextwaveLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    services: false,
    industries: false,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setDropdownOpen(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle scroll to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-white group ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } bg-black/20 backdrop-blur-sm border-b border-white/20`} >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-3 md:px-[24px] py-4">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-md text-white">
          {/* Services Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => toggleDropdown(0)}
              className="font-medium group-hover:text-gray-800 transition"
            >
              Services ▾
            </button>
            {dropdownOpen === 0 && (
              <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded shadow-lg w-48 z-20">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left px-4 py-2 hover:bg-white/50 text-[#232B36]"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-4 py-2 hover:bg-white/50 text-[#232B36]"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left px-4 py-2 hover:bg-white/50 text-[#232B36]"
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
              className="font-medium group-hover:text-gray-800 hover:text-blue-200 transition"
            >
              Industries ▾
            </button>
            {dropdownOpen === 1 && (
              <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded shadow-lg w-48 z-20">
                <button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left px-4 py-2 hover:bg-white/50 text-[#232B36]"
                >
                  Industries We Serve
                </button>
                <Link
                  to="/industry-served"
                  className="block px-4 py-2 hover:bg-white/50 text-[#232B36]"
                >
                  Industry Details
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="font-medium group-hover:text-gray-800 hover:text-blue-200 transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="font-medium group-hover:text-gray-800 hover:text-blue-200 transition"
          >
            Research & Insights
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium group-hover:text-gray-800 hover:text-blue-200 transition"
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
            className="text-white group-hover:text-gray-800 focus:outline-none"
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
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-black/80 backdrop-blur-sm border-t border-white/20 text-white text-base">
          {/* Services dropdown */}
          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  services: !prev.services,
                }))
              }
              className="w-full text-left font-medium hover:text-blue-200"
            >
              Services ▾
            </button>
            {mobileDropdown.services && (
              <div className="ml-4 mt-1 space-y-1">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left hover:text-blue-200"
                >
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left hover:text-blue-200"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left hover:text-blue-200"
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
              className="w-full text-left font-medium hover:text-blue-200"
            >
              Industries ▾
            </button>
            {mobileDropdown.industries && (
              <div className="ml-4 mt-1 space-y-1">
                <button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left hover:text-blue-200"
                >
                  Industries We Serve
                </button>
                <Link
                  to="/industry-served"
                  className="block hover:text-blue-200"
                >
                  Industry Details
                </Link>
              </div>
            )}
          </div>

          {/* Static Items */}
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left hover:text-blue-200"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="block w-full text-left hover:text-blue-200"
          >
            Research & Insights
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left hover:text-blue-200"
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
