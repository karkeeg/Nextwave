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
    const headerOffset = 80; // approximate fixed header height
    const closeMenus = () => {
      setMenuOpen(false);
      setDropdownOpen(null);
    };

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      closeMenus();
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || window.pageYOffset) + rect.top - headerOffset;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
    closeMenus();
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      // rotate: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const ctaButtonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(33, 118, 193, 0.4)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <header className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 hover:bg-[#c4d4f5] group overflow-visible ${
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
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                onClick={() => toggleDropdown(0)}
                className="font-medium group-hover:text-gray-800 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <button>

                Services ▾
                </button>
              </motion.button>
            </motion.div>
            {dropdownOpen === 0 && (
              <motion.div 
                className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#c4d4f5] border border-slate-200 shadow-lg shadow-slate-300/40 ring-1 ring-black/5 z-[60] overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 1)" }}
                >
                  <motion.button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left px-4 py-2 text-[#232B36] hover:bg-slate-50 transition-all duration-200"
                  >
                    <button>
                      
                    Our Services
                    </button>
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 1)" }}
                >
                  <motion.button
                    onClick={() => scrollToSection("testimonials")}
                    className="block w-full text-left px-4 py-2 text-[#232B36] hover:bg-slate-50 transition-all duration-200"
                  >
                    <button>

                    Testimonials
                    </button>
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 1)" }}
                >
                  <motion.button
                    onClick={() => scrollToSection("faqs")}
                    className="block w-full text-left px-4 py-2 text-[#232B36] hover:bg-slate-50 transition-all duration-200"
                  >
                    <button>
                    FAQs
                    </button>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                onClick={() => toggleDropdown(1)}
                className="font-medium group-hover:text-gray-800 hover:text-blue-800 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
              <button>
                Industries ▾
              </button>
              </motion.button>
            </motion.div>
            {dropdownOpen === 1 && (
              <motion.div 
                className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#c4d4f5] border border-slate-200 shadow-lg shadow-slate-300/40 ring-1 ring-black/5 z-[60] overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 1)" }}
                >
                  <motion.button
                    onClick={() => scrollToSection("industries")}
                    className="block w-full text-left px-4 py-2 text-[#232B36] hover:bg-slate-50 transition-all duration-200"
                  >
              <button>
                    Industries We Serve
                        </button>
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/industry-served"
                    className="block px-4 py-2 text-[#232B36] hover:bg-slate-50 transition-all duration-200"
                  >
                    <button>

                    Industry Details
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>

          <motion.div
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="font-medium group-hover:text-gray-800 hover:text-blue-800 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            ><button>

              About Us
            </button>
            </motion.button>
          </motion.div>
          <motion.div
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.button
              onClick={() => scrollToSection("research")}
              className="font-medium group-hover:text-gray-800 hover:text-blue-800 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <button>

              Research & Insights
              </button>
            </motion.button>
          </motion.div>
          <motion.div
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="font-medium group-hover:text-gray-800 hover:text-blue-800 transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <button>

              Contact
              </button>
            </motion.button>
          </motion.div>

          <motion.div
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/get-started"
              className="ml-4 bg-[#2176C1] text-white font-bold px-5 py-2.5 rounded hover:bg-[#1761a0] shadow-sm transition-all duration-200"
            >
              <button>

              Get a free Consultant
              </button>
            </Link>
          </motion.div>
        </nav>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white group-hover:text-gray-800 focus:outline-none"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
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
          className="lg:hidden px-6 pb-4 space-y-3 bg-[#c4d4f5] backdrop-blur-sm overflow-visible border-t border-white/20 text-gray-900 transparent text-base"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Services dropdown */}
          <div>
            <motion.div
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() =>
                  setMobileDropdown((prev) => ({
                    ...prev,
                    services: !prev.services,
                  }))
                }
                className="w-full text-left font-medium hover:text-blue-800 transition-colors duration-200"
              >
              <button>
                Services ▾
              </button>
              </motion.button>
            </motion.div>
            {mobileDropdown.services && (
              <motion.div 
                className="ml-4 mt-1 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
                  >
                    Our Services
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("testimonials")}
                    className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
                  >
                    Testimonials
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("faqs")}
                    className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
                  >
                    FAQs
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Industries dropdown */}
          <div>
            <motion.div
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() =>
                  setMobileDropdown((prev) => ({
                    ...prev,
                    industries: !prev.industries,
                  }))
                }
                className="w-full text-left font-medium hover:text-blue-800 transition-colors duration-200"
              >
              <button>
                Industries ▾

              </button>

              </motion.button>
            </motion.div>
            {mobileDropdown.industries && (
              <motion.div 
                className="ml-4 mt-1 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("industries")}
                    className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
                  >
              <button>
                    Industries We Serve
              </button>
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to="/industry-served"
                    className="block hover:text-blue-800 transition-colors duration-200"
                  >
                                <button> Industry Details </button>

                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Static Items */}
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
            >
              <button>

                            About Us
              </button>
            </motion.button>
          </motion.div>
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              onClick={() => scrollToSection("research")}
              className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
            >
              <button>


              Research & Insights
              </button>
            </motion.button>
          </motion.div>
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-blue-800 transition-colors duration-200"
            >
              <button>

              Contact
              </button>
            </motion.button>
          </motion.div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button className="block w-full bg-[#2176C1] text-white text-center py-2 rounded  transition-all duration-200">
              <Link
                to="/get-started"
                className="block w-full h-full"
              >
                <button>

                Get a free Consultant
                </button>
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;