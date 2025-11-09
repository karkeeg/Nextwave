import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/nextwaveLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        setIsVisible(false); // hide when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Direct scrollToSection implementation
  const scrollToSection = (sectionId) => {
    const closeMenus = () => {
      setMenuOpen(false);
      setDropdownOpen(null);
    };

    const scrollToElement = () => {
      const header = document.querySelector("header");
      const section = document.getElementById(sectionId);

      if (!section) return;

      const scrollPosition = section.offsetTop;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate(`/`);
      // Wait for the home page to load
      setTimeout(() => {
        scrollToElement();
      }, 100);
    } else {
      scrollToElement();
    }

    closeMenus();
  };

  const logoVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const navItemVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  const ctaButtonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-[#B8D4F1]`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3">
        {/* Left: Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10 md:h-12"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-base font-semibold text-[#2C3E50]">
          {/* Services */}
          <motion.button
            onClick={() => scrollToSection("services")}
            className="hover:text-[#2176C1] transition-colors duration-200"
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Services
          </motion.button>

          {/* Industries */}
          <motion.button
            onClick={() => scrollToSection("industries")}
            className="hover:text-[#2176C1] transition-colors duration-200"
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Industries
          </motion.button>

          {/* Case Studies — commented out */}
          {/* 
        <motion.button
          onClick={() => scrollToSection("case-studies")}
          className="hover:text-[#2176C1] transition-colors duration-200"
          variants={navItemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Case Studies
        </motion.button>
        */}

          {/* FAQs — replacing Case Studies */}
          <motion.button
            onClick={() => scrollToSection("faqs")}
            className="hover:text-[#2176C1] transition-colors duration-200"
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            FAQs
          </motion.button>

          {/* Research & Insights */}
          <motion.button
            onClick={() => scrollToSection("research")}
            className="hover:text-[#2176C1] transition-colors duration-200"
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Research & Insights
          </motion.button>
        </nav>

        {/* Right: CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="flex items-center justify-center bg-black text-white p-2.5 rounded-lg shadow-sm transition-all duration-200"
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-[#2176C1] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all duration-200"
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Free Consultation
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden ml-auto">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2C3E50] focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
