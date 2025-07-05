export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary text-white shadow z-10">
      <div className="flex justify-center space-x-6 py-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
