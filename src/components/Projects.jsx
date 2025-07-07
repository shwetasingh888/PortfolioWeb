import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "LMS Website",
      description: "Modern React & LMS.",
      link: "https://github.com/shwetasingh888/portfolio"
    },
    {
      title: "Sample Project",
      description: "Another project description.",
      link: "#"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-accent rounded-2xl shadow-md p-6 w-full md:w-80 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Code</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
