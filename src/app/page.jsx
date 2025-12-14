// src/app/page.jsx
'use client';

import React, { useState } from 'react';
import { ArrowRight, Code2, Github, Linkedin, Mail, ExternalLink, Download, Send, Globe, Palette, Database, Zap } from 'lucide-react';
import axios from 'axios';



export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // success/error message के लिए

  // Skills Data


const skills = [
  { name: 'HTML5', level: 95, icon: <Code2 className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', level: 90, icon: <Palette className="w-6 h-6" />, color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', level: 95, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-400 to-orange-600' },
  { name: 'React.js', level: 95, icon: <Code2 className="w-6 h-6" />, color: 'from-cyan-400 to-sky-600' },
  { name: 'Bootstrap', level: 95, icon: <Palette className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
  { name: 'Next.js', level: 90, icon: <Code2 className="w-6 h-6" />, color: 'from-gray-700 to-gray-900' },
  { name: 'Node.js', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-lime-500' },
  { name: 'Express.js', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-emerald-500 to-teal-600' },
  { name: 'MongoDB', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-green-700 to-emerald-400' },
  { name: 'My SQL', level: 85, icon: <Palette className="w-6 h-6" />, color: 'from-teal-400 to-cyan-500' },
  { name: 'GitHub', level: 80, icon: <Code2 className="w-6 h-6" />, color: 'from-red-600 to-orange-500' },
  { name: 'Postman', level: 75, icon: <Globe className="w-6 h-6" />, color: 'from-orange-400 to-yellow-500' },
];


  // Projects Data
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A fully responsive Netflix UI clone built using HTML, CSS, and Vanilla JavaScript. Features smooth carousels, hover effects, category sections, and a pixel-perfect layout with cross-device compatibility.',
      tech: ['HTML5', 'CSS3', 'JavaScript','Responsive Design','UI/UX'],
      image: '/images/project1.jpg',
      github: '#',
      live: 'https://hk-netlix.netlify.app/'
    },
    {
      title: 'Restaurant Website',
      description: 'A modern, multi-page restaurant website built using HTML, CSS, JavaScript, and Bootstrap. Includes smooth animations, a responsive menu gallery, reservation form, and a mobile-first design.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap','Responsive Design','UI/UX'],
      image: '/images/project2.png',
      github: '#',
      live: 'https://hk-resturant.netlify.app/'
    },
     {
      title: 'Coza Store',
      description: 'A static, responsive fashion e-commerce website built using React.js and CSS. Features a product grid layout, category filtering, cart, wishlist functionality, and a clean user interface.',
      tech:  ['HTML5','CSS3','React.js', 'Bootstrap','Responsive Design','UI/UX'],
      image: '/images/project3.png',
      github: '#',
      live: 'https://hk-fashionstore.netlify.app/'
    },
   
    {
      title: 'Morgan Painting Services',
      description: 'A multi-page, responsive website for a professional painting contractor built using React.js and Bootstrap 5. Includes Home, About, Services pages, and a contact form with a modern, clean design.',
      tech: ['HTML5','CSS3','React.js', 'Bootstrap','Responsive Design','UI/UX'],
      image: '/images/project4.png',
      github: '#',
      live: 'https://morgan-service.netlify.app/'
    },
      {
      title: 'Blog Hub',
      description: 'A full-stack blogging platform built using the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, create/edit/delete posts, rich text editor, comments, and a responsive user interface.',
      tech: ['React.js','Bootstrap','MongoDB', 'Express.js', 'Node.js','Admin Dashboard','REST APIs','CRUD Operations','JWT'],
      image: '/images/project5.png',
      github: '#',
      live: 'https://blog-hub-silk.vercel.app/'
    },
    {
      title: 'DoctorCare Appointment System',
      description: 'A full-stack doctor appointment management system that allows users to book, manage, and track appointments. Includes user authentication, doctor listings, appointment scheduling, admin management, and a responsive dashboard interface.',
      tech:  ['React.js','Bootstrap','MongoDB', 'Express.js', 'Node.js','Admin Dashboard','REST APIs','CRUD Operations','JWT'],
      image: '/images/project6.png',
      github: '#',
      live: 'https://doctorcareapp.vercel.app/'
    },
     {
      title: 'Bait-Un-Nasr',
      description: 'A full-stack Islamic bank website built using the MERN stack. Features a dynamic contact form with submissions stored in MongoDB and a fully responsive design across all devices.',
      tech: ['React.js','Node.js','Express.js', 'MongoDB',   'REST APIs','Form Handling', 'Responsive Design'],
      image: '/images/project7.png',
      github: '#',
      live: 'https://bait-un-nasr.netlify.app/'
    },
     {
      title: 'Feather White',
      description: 'A full-stack MERN admin dashboard with complete Product CRUD, image upload, category management, JWT-based authentication, and a responsive UI built using Tailwind CSS.',
      tech: ['React.js','Tailwind CSS','MongoDB', 'Express.js', 'Node.js', 'JWT','REST APIs','Admin Dashboard','CRUD Operations'],
      image: '/images/project8.png',
      github: '#',
      live: 'https://feather-white.vercel.app/'
    },
     {
      title: 'Employee Management System',
      description: 'Complete MERN stack CRUD application with an admin dashboard, employee profiles, attendance tracking, salary management, JWT-based authentication, and role-based access control.',
            tech: ['React.js','Tailwind CSS','MongoDB', 'Express.js', 'Node.js', 'JWT','REST APIs','CRUD Operations',  'Role-Based Access Control'],
      image: '/images/project9.png',
      github: '#',
      live: 'https://employee-frontend-beryl-xi.vercel.app/'
    },
  ];

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus('');

  try {
    const response = await axios.post('/api/email', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (response.status === 200) {
      setStatus('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    setStatus('Failed to send message. Please try again.');
  } finally {
    setLoading(false);
  }
};

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-black text-white">
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Freelance
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-slate-300">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
              Building exceptional digital experiences with modern technologies. 
              Specializing in React, Next.js, Node.js,Express.js and MongoDB to create scalable web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl font-bold hover:border-cyan-500/50 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <a href="https://github.com/HussainKhan43" target='_blank' className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/hussain-khan-91b260274/" target='_blank' className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=600&fit=crop" 
                  alt="Developer"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">About Me</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                  Turning Ideas Into <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Reality</span>
                </h2>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with 1+ years of experience in building modern web applications. 
                I love creating beautiful, functional, and user-friendly websites that make a difference.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                My expertise lies in JavaScript ecosystem, specializing in React, Next.js, Node.js,Expree.js,Mongo DB and modern CSS frameworks. 
                I'm constantly learning new technologies and best practices to deliver exceptional results.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-cyan-400">30+</h3>
                  <p className="text-slate-400">Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-blue-400">150+</h3>
                  <p className="text-slate-400">Happy Clients</p>
                </div>
              </div>

              {/* <button className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-semibold hover:border-cyan-500/50 transition-all duration-300 mt-8">
                Download CV
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button> */}
              <a 
                href="/HussainResume.pdf" 
                download="Hussain_Khan_CV.pdf"
                className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-semibold hover:border-cyan-500/50 transition-all duration-300 mt-8 w-fit"
              >
                Download CV
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">My Skills</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Technologies I <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Master</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative space-y-4">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${skill.color} rounded-xl`}>
                    {skill.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{skill.level}% Proficiency</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-slate-400 mt-6 text-lg">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
                className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <div className={`text-center font-medium py-3 px-4 rounded-lg ${
                status.includes('success') ? 'text-green-400 bg-green-900/20' : 'text-red-400 bg-red-900/20'
              }`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}