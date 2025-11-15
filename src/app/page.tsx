"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, GraduationCap, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const firstName = "Ethan";
  const lastName = "Savar";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const experiences = [
    {
      role: "Incoming Intern",
      company: "Capital One",
      location: "McLean, VA",
      logo: "/C1Logo.png",
      desc: "Incoming Intern",
      dates: "Summer 2026",
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorganChase",
      location: "Columbus, OH",
      logo: "/JPMCLogo.png",
      desc: "Developed backtesting tools for Asset and Wealth Management applications",
      dates: "June 2025 - August 2025",
    },
    {
      role: "Research Engineer/Scientist Intern",
      company: "Immuta",
      location: "Remote / Columbus, OH",
      logo: "/ImmutaLogo.png",
      desc: "Worked on DFA-based regex optimization, improving data classification pipelines and algorithmic reliability.",
      dates: "May 2024 - May 2025",
    },
    {
      role: "Undergraduate TA + RA",
      company: "The Ohio State University",
      location: "Columbus, OH",
      logo: "/OSULogo.png",
      desc: "TA'd for CSE 2331: Data Structures and Algorithms. Researched stochastic differential equations effects on Diffusion Models and Uncertainty Calibration for LLMs",
      dates: "August 2023 - May 2025",
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Science Engineering & Mathematics",
      school: "The Ohio State University",
      location: "Columbus, OH",
      logo: "/OSULogo.png",
      gpa: "GPA: 3.53 / 4.0",
      dates: "2022 – 2026 (Expected)",
      honors: "Dean's List • Honors Integrated Business and Engineering • College of Engineering",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-blue-400">{firstName}</span> {lastName}
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-300 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 right-0 bg-blue-950/95 backdrop-blur-2xl border-b border-white/20 z-40 pt-24 pb-10 px-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col space-y-8 text-lg font-medium">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-300 transition-colors py-2 border-b border-white/10 last:border-none"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-2 border-blue-400 shadow-lg overflow-hidden bg-blue-800">
            <img src="/Headshot.JPEG" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">{firstName}</span>.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm a Software Engineer and Researcher passionate about applying mathematical and statistical methods to data. My research
            interests are in Complexity Theory, Algorithms, Machine Learning, Differential Equations, Applied Statistics and Randomness.
          </p>
          <a
            href="/SavarEthanResume.pdf"
            download
            className="inline-block bg-blue-600 px-6 py-3 rounded-full text-white font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </main>

      {/* Experience */}
      <section id="experience" className="px-10 py-24 bg-blue-800/40 backdrop-blur-xl border-y border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-blue-300/30 to-transparent" />
          {experiences.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0 flex items-start gap-8 pl-20"
            >
              <div className="absolute left-3 top-6 w-12 h-12 rounded-xl bg-white shadow-2xl shadow-blue-400/60 z-10 overflow-hidden border-4 border-blue-950">
                <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" draggable={false} />
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    {job.location && <p className="text-gray-300 font-medium">{job.location}</p>}
                    <span className="text-gray-400">{job.dates}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{job.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-10 py-24 bg-gradient-to-b from-purple-900/20 via-indigo-900/20 to-blue-950">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
          Education
        </h2>
        <div className="mx-auto max-w-3xl">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-indigo-500/10 rounded-xl p-6 mb-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-white shadow-lg overflow-hidden border-2 border-black-600 flex-shrink-0">
                  {edu.logo ? (
                    <img src={edu.logo} alt={`${edu.school} logo`} className="w-full h-full object-cover" draggable={false} />
                  ) : (
                    <GraduationCap className="w-full h-full p-3 text-indigo-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white-300">{edu.degree}</h3>
                  <p className="text-lg font-medium text-white mt-0.5">{edu.school}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm">
                    <span className="text-blue-400 font-medium">{edu.location}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{edu.dates}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-500/20 text-gray-300 rounded-full font-medium">{edu.gpa}</span>
                    <span className="text-gray-300">{edu.honors}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-24 bg-blue-950/40 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "Data For Good Hackathon Winner 2025", desc: "Built an analytics dashboard serving educational nonprofit in Python and Tableau" },
            { title: "AutoTex", desc: "Application that converts text and handwritten notes into LaTeX documents using OCR and LLM models in React and Python" },
            { title: "GroupViz", desc: "Interactive visualizer to simulate Dihedral Group actions up to D(12) and generate Cayley Graphs using Python" },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:shadow-blue-500/40 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-8">Interested in collaborating or hiring? Let's connect.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:ethan.savar@gmail.com" className="hover:text-blue-300 transition"><Mail size={24} /></a>
          <a href="https://github.com/e-savar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition"><Github size={24} /></a>
          <a href="https://linkedin.com/in/ethan-savar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition"><Linkedin size={24} /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10">
        Thank you for visiting my website!
      </footer>
    </div>
  );
}