import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary text-white text-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      
      <motion.img 
        src={profile}
        alt="Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Shweta
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mb-8 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A passionate frontend developer crafting beautiful & modern web apps.
        </motion.p>

        <motion.div className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a 
            href="#projects"
            className="bg-white text-primary px-6 py-3 rounded-full shadow hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          <motion.a 
            href="/src/assets/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full shadow hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
