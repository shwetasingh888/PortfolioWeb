import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";

export default function Projects() {
  // Example project data – replace with your real projects
  const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio built with React and Tailwind CSS.",
    image: portfolioImg,  // use the imported variable here
    link: "https://github.com/shwetasingh888/portfolio"
  },
    {
      title: "Weather App",
      description: "Real-time weather updates with OpenWeather API.",
      image: "https://via.placeholder.com/400x200",
      link: "https://github.com/shwetasingh888/weather-app"
    },
    {
      title: "Task Manager",
      description: "A clean to-do app to manage daily tasks efficiently.",
      image: "https://via.placeholder.com/400x200",
      link: "https://github.com/shwetasingh888/task-manager"
    }
  ];

  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
