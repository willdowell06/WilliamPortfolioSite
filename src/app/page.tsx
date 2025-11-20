"use client";

import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const firstName = "William";
  const lastName = "Dowell";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const experiences = [
    {
      role: "Manufacturing Engineer Intern",
      company: "Sloan Valve Company",
      location: "Chicago, IL",
      logo: "/SloanLogo.png",
      desc: "Designed and optimized workflow for CNC machining cell, conducted material flow analysis",
      dates: "May 2025 - August 2025",
    },
    {
      role: "Instrument Technician Intern",
      company: "Field Environmental Instruments",
      location: "Chicago, IL",
      logo: "/FieldLogo.png",
      desc: "Calibrated and repaired defects with Testo 350 and JUM 3-500 gas analyzers for environmental compliance testing",
      dates: "June 2024 - August 2024",
    },
  ];

  const education = [
    {
      degree: "B.S. Mechanical Engineering",
      school: "The Ohio State University",
      location: "Columbus, OH",
      logo: "/OSULogo.png",
      gpa: "GPA: 3.62 / 4.0",
      dates: "2022 – 2026 (Expected)",
      honors: "Dean's List • College of Engineering",
    },
  ];

  // ---------------------
  // PROJECT + MODAL STATE
  // ---------------------

  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const projectData = [
    {
      title: "DV1 Mill Guarding",
      desc:
        "Designed and improved 80/20 aluminum extrusion guarding in collaboration with operators and maintenance...",
      images: [
        "/placeholder1.png",
        "/placeholder2.png",
        "/placeholder3.png",
      ],
    },
    {
      title: "Air Motor",
      desc:
        "Machined a precision piston–cylinder assembly from raw stock...",
      images: [
        "/placeholder4.png",
        "/placeholder5.png",
      ],
    },
    {
      title: "Garage Door Sensor/Remote",
      desc:
        "Built an Arduino-based garage door sensing system with mechanical, electrical, and software integration...",
      images: [
        "/placeholder6.png",
        "/placeholder7.png",
        "/placeholder8.png",
      ],
    },
  ];

  const nextImage = () => {
    if (!activeProject) return;
    setImageIndex((i) => (i + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setImageIndex((i) =>
      i === 0 ? activeProject.images.length - 1 : i - 1
    );
  };

  // ---------------------
  //       RETURN UI
  // ---------------------

  return (
    <div className="flex min-h-screen flex-col font-sans bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white">
      {/* Navbar */}
      <nav className="relative flex items-center justify-between px-6 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-green-400">{firstName}</span> {lastName}
        </h1>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 right-0 bg-green-950/95 backdrop-blur-2xl border-b border-white/20 z-40 pt-24 pb-10 px-8 shadow-2xl md:hidden"
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
                    className="text-white hover:text-green-300 transition-colors py-2 border-b border-white/10 last:border-none"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-2 border-green-400 shadow-lg overflow-hidden bg-green-800">
            <img
              src="/WillHeadshot.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-green-400">Will</span>!
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          I’m a Mechanical Engineer with a passion for product design, precision manufacturing, and transforming ideas into functional systems. I love working at the intersection of creativity and engineering such as developing mechanical designs or refining products for manufacturability and hands-on fabrication. I’m driven by curiosity, and a desire to build well-engineered products.

          </p>

          <a
            href="/WilliamDowellCareerResume.pdf"
            download
            className="inline-block bg-green-600 px-6 py-3 rounded-full text-white font-medium hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </main>

      {/* Experience */}
      <section
        id="experience"
        className="px-10 py-24 bg-green-800/40 backdrop-blur-xl border-y border-white/10"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/50 via-green-300/30 to-transparent" />

          {experiences.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0 flex items-start gap-8 pl-20"
            >
              <div className="absolute left-3 top-6 w-12 h-12 rounded-xl bg-white shadow-2xl shadow-green-400/60 z-10 overflow-hidden border-4 border-green-950">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-green-400/20 hover:border-green-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {job.role}
                    </h3>
                    <p className="text-green-400 font-medium">
                      {job.company}
                    </p>
                  </div>

                  <div className="text-right text-sm">
                    {job.location && (
                      <p className="text-gray-300 font-medium">
                        {job.location}
                      </p>
                    )}
                    <span className="text-gray-400">{job.dates}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="px-10 py-24 bg-gradient-to-b from-green-900/20 via-green-900/20 to-green-950"
      >
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
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
              className="group relative bg-white/5 backdrop-blur-lg border border-green-500/10 rounded-xl p-6 mb-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-white shadow-lg overflow-hidden border-2 border-green-600 flex-shrink-0">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <GraduationCap className="w-full h-full p-3 text-green-600" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-lg font-medium mt-0.5">
                    {edu.school}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm">
                    <span className="text-green-400 font-medium">
                      {edu.location}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{edu.dates}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-green-500/20 text-gray-300 rounded-full font-medium">
                      {edu.gpa}
                    </span>
                    <span className="text-gray-300">{edu.honors}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-10 py-24 bg-green-950/40 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {projectData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              onClick={() => {
                setActiveProject(project);
                setImageIndex(0);
              }}
              className="relative bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer group overflow-hidden hover:border-green-500/30 transition-all duration-300"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="text-white text-xl font-semibold">
                  Click Me
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999]"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[1000] px-6"
            >
              <div className="relative max-w-3xl w-full bg-green-950/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-6">
                <motion.img
                  key={imageIndex}
                  src={activeProject.images[imageIndex]}
                  className="w-full h-[400px] object-contain rounded-lg"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Title */}
                <h3 className="text-center mt-4 text-xl font-semibold text-white">
                  {activeProject.title}
                </h3>

                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white text-3xl"
                >
                  ‹
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white text-3xl"
                >
                  ›
                </button>

                {/* Close */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-md text-white text-lg"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          Interested in collaborating or hiring? Let's connect.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:will.dowell06@gmail.com"
            className="hover:text-green-300 transition"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/william-dowell-709b02296/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10">
        Thank you for visiting my website!
      </footer>
    </div>
  );
}
