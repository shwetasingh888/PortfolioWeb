import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="p-8 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">Contact Me</h2>
      
      <form 
        action="https://formspree.io/f/mzzgqrrk" // ← replace with your real Formspree endpoint
        method="POST"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input 
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your message"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
        >
          Send Message
        </button>
      </form>

      {/* Social icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a 
          href="https://github.com/shwetasingh888" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary text-3xl transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary text-3xl transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
