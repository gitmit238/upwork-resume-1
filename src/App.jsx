import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Navbar/>
      
      <Hero/>

      <About />

      <Experience />

      <Skills />

      <Education />

    </div>
  );
}