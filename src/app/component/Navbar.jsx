// app/component/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Code2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-2.5 rounded-xl transform group-hover:rotate-12 transition-transform duration-500">
                <Code2 className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            </div>
            <a href="#home" className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                HKFOLIO
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name.toLowerCase())}
                className="relative px-6 py-2.5 group"
              >
                <span
                  className={`relative z-10 text-sm font-semibold transition-all duration-300 ${
                    activeLink === link.name.toLowerCase()
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                {activeLink === link.name.toLowerCase() && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-50"></span>
                  </>
                )}

                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white overflow-hidden group focus:outline-none"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[length:100%_100%]" />

              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-40 transition-all duration-700 group-hover:opacity-100" />

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <Sparkles className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg text-slate-400 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-cyan-500/30">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  activeLink === link.name.toLowerCase()
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-5 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-center font-bold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
