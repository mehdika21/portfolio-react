


import "./portfolio.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="bg-[#151515] text-slate-100 selection:bg-teal-300/30 min-h-screen"
      style={{
        fontFamily: 'Press Start 2P, ui-monospace, monospace',
        background:
          'radial-gradient(2000px 1000px at 50% -600px, rgba(59,163,169,.06), transparent 60%),' +
          'radial-gradient(1400px 600px at 10% -200px, rgba(212,175,55,.04), transparent 60%),' +
          '#151515',
        animation: 'oceanPulse 12s ease-in-out infinite',
        color: '#f1f5f9',
      }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
