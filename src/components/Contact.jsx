import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 text-center bg-accent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-primary">Contact Me</h2>
      
      <form 
        action="https://formspree.io/f/yourformid" 
        method="POST" 
        className="max-w-md mx-auto flex flex-col gap-4 mb-8"
      >
        <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-primary text-white py-2 rounded hover:bg-secondary">Send Message</button>
      </form>

      <motion.div 
        className="flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <a 
          href="https://github.com/shwetasingh888" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a 
          href="https://linkedin.com/in/your-linkedin-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
}
