import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      
      <Navbar/>
      
      <Hero/>

      <About />

      <Experience />

      <Skills/>

      <Education />

      <Projects/>

      <Contact/>

      <Footer/>

    </div>
  );
}