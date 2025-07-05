import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";

export default function About() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Tailwind CSS", image: tailwind },
    { name: "SQL", image: sql },
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 px-4 bg-accent text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-8">
        I’m Shweta, a frontend developer skilled in modern web technologies. Motivated fresher with a strong foundation in SQL for managing and querying relational databases. Skilled in front-end development using React Native and React with Vite and Tailwind CSS to create responsive and user-friendly applications. Comfortable using GitHub for version control and project collaboration.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-secondary">Skills</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            className="flex flex-col items-center bg-white rounded shadow p-4 w-24 hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-2" />
            <span className="text-gray-700 text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
