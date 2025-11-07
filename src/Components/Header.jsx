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

      const headerHeight = header ? header.offsetHeight : 0;
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

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2C3E50]">
          {/* Services Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <motion.button
              onClick={() => toggleDropdown(0)}
              className="hover:text-[#2176C1] transition-colors duration-200"
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Services
            </motion.button>
            {dropdownOpen === 0 && (
              <motion.div
                className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white border border-slate-200 shadow-lg z-[60] overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left px-4 py-2.5 text-[#2C3E50] hover:bg-slate-50 transition-all duration-200"
                >
                  Our Services
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-4 py-2.5 text-[#2C3E50] hover:bg-slate-50 transition-all duration-200"
                >
                  Testimonials
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left px-4 py-2.5 text-[#2C3E50] hover:bg-slate-50 transition-all duration-200"
                >
                  FAQs
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <motion.button
              onClick={() => scrollToSection("industries")}
              className="hover:text-[#2176C1] transition-colors duration-200"
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Industries
            </motion.button>
            {/* {dropdownOpen === 1 && (
              <motion.div
                className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white border border-slate-200 shadow-lg z-[60] overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left px-4 py-2.5 text-[#2C3E50] hover:bg-slate-50 transition-all duration-200"
                >
                  Industries We Serve
                </motion.button>
                {/* <Link
                  to="/industry-served"
                  className="block px-4 py-2.5 text-[#2C3E50] hover:bg-slate-50 transition-all duration-200"
                >
                  Industry Details
                </Link> */}
            {/* </motion.div>
            )} */}
          </div>

          {/* Case Studies */}
          <motion.button
            onClick={() => scrollToSection("case-studies")}
            className="hover:text-[#2176C1] transition-colors duration-200"
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Case Studies
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

        {/* CTA Button with Phone Icon */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Phone Icon Button - Black Background */}
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

          {/* Free Consultation Button */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-[#2176C1] text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
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
            transition={{ duration: 0.2 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="lg:hidden px-6 pb-4 space-y-3 bg-white text-[#2C3E50] text-base"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Services */}
          <div>
            <motion.button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  services: !prev.services,
                }))
              }
              className="w-full text-left font-medium hover:text-[#2176C1] transition-colors duration-200"
            >
              Services ▾
            </motion.button>
            {mobileDropdown.services && (
              <motion.div
                className="ml-4 mt-1 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
                >
                  Our Services
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
                >
                  Testimonials
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("faqs")}
                  className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
                >
                  FAQs
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Industries */}
          <div>
            <motion.button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  industries: !prev.industries,
                }))
              }
              className="w-full text-left font-medium hover:text-[#2176C1] transition-colors duration-200"
            >
              Industries ▾
            </motion.button>
            {mobileDropdown.industries && (
              <motion.div
                className="ml-4 mt-1 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
                >
                  Industries We Serve
                </motion.button>
                <Link
                  to="/industry-served"
                  className="block hover:text-[#2176C1] transition-colors duration-200"
                >
                  Industry Details
                </Link>
              </motion.div>
            )}
          </div>

          {/* Case Studies */}
          <motion.button
            onClick={() => scrollToSection("case-studies")}
            className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
          >
            Case Studies
          </motion.button>

          {/* Research & Insights */}
          <motion.button
            onClick={() => scrollToSection("research")}
            className="block w-full text-left hover:text-[#2176C1] transition-colors duration-200"
          >
            Research & Insights
          </motion.button>

          {/* CTA */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="flex items-center justify-center gap-2 w-full bg-[#2176C1] text-white py-2.5 rounded-lg transition-all duration-200"
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
            Free Consultation
          </motion.button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
