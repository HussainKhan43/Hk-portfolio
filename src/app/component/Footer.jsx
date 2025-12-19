// app/component/Footer.jsx
'use client';

import React, { useState } from 'react';
import { Github, Linkedin,  MessageCircle, Mail, Heart, Send, MapPin, Phone, Zap, ArrowUp, Instagram, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/HussainKhan43', gradient: 'from-purple-500 to-pink-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/hussain-khan-91b260274/', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, href: '#', gradient: 'from-cyan-400 to-blue-400' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', gradient: 'from-green-500 to-emerald-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'UI/UX Design',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative bg-black text-slate-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-60"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 rounded-xl">
                  <Code2 className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                HKFOLIO
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting digital experiences with modern technologies. Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                      target="_blank"
                  className="group relative p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                  <span className="relative text-slate-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:your@email.com" className="hover:text-cyan-400 transition-colors duration-300">
                  hussainkhan5march@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-cyan-400 transition-colors duration-300">
                  +91 9619956006
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800/50 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-bold text-2xl mb-3">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-8">Subscribe to get latest updates and tech insights</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
              />
              <button 
                type="submit"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-400 flex items-center gap-2">
            © {currentYear} DEVFOLIO. Made by 
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> 
            Hussain Khan
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/75 hover:scale-110 transition-all duration-300 z-50 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
