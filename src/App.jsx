import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileText, Moon, Sun } from "lucide-react";

const projects = [
  {
    title: "Real-Time Stock Pipeline",
    desc: "Kafka-based real-time data pipeline with live dashboard.",
    link: "https://github.com/Shashank150503/REAL-DATA-STOCK-PIPELINE",
  },
  {
    title: "HamarJob Portal",
    desc: "Full-stack job portal with smart filtering.",
    link: "#",
  },
  {
    title: "AI Q&A App",
    desc: "GenAI-powered question answering system.",
    link: "#",
  },
];

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="min-h-screen px-6 transition-all duration-500">
        <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Shashank</h1>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        <section className="text-center py-24 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-tight"
          >
            Building Scalable Data Pipelines & Real-Time Systems
          </motion.h1>

          <p className="mt-6 text-lg text-gray-400">
            Hi, I'm Shashank Kumar Singh — Data Engineer focused on scalable systems.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="#projects" className="bg-white text-black px-6 py-2 rounded-full">
              View Work
            </a>
            <a href="/resume.pdf" className="border px-6 py-2 rounded-full flex items-center gap-2">
              <FileText size={16} /> Resume
            </a>
          </div>
        </section>

        <section id="projects" className="py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
                <a href={p.link} target="_blank" className="flex gap-2 mt-4 text-blue-400">
                  View <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-bold">Junior Analyst - KoiReader</h3>
              <p className="text-sm text-gray-400">Worked on ML models and data pipelines.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-bold">Software Intern - BlueStock</h3>
              <p className="text-sm text-gray-400">Built scalable APIs and optimized UI.</p>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <p className="text-gray-400">Python • Kafka • AWS • React • Node.js • Docker</p>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:shashank1505kumar@gmail.com"><Mail /></a>
            <a href="https://github.com/Shashank150503"><Github /></a>
            <a href="https://linkedin.com"><Linkedin /></a>
          </div>
        </section>

        <footer className="text-center py-6 text-sm text-gray-500">
          © 2026 Shashank Kumar Singh
        </footer>
      </div>
    </div>
  );
}
