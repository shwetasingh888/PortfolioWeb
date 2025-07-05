import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import framerLogo from "../assets/sql.png";

export default function About() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
      <p className="max-w-2xl mx-auto mb-8">
        I’m a frontend developer with a love for React, animations & clean design.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-secondary">My Skills</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center space-y-2">
          <img src={htmlLogo} alt="HTML" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">HTML</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={cssLogo} alt="CSS" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">CSS</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={jsLogo} alt="JavaScript" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">JavaScript</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={reactLogo} alt="React" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={framerLogo} alt="SQL" className="w-16 h-16 object-contain hover:scale-110 transition-transform" />
          <span className="text-sm">SQL</span>
        </div>
      </div>
    </section>
  );
}
