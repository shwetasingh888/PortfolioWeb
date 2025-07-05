import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/" className="text-primary font-bold text-xl">Shweta</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/projects" className="hover:text-primary">Projects</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </nav>
  );
}
