import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-primary to-secondary text-white px-8 py-16">
      <motion.img
        src={profile}
        alt="Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl object-cover mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:ml-8 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shweta</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl">A frontend developer passionate about crafting modern, beautiful web apps.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-white text-primary px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
