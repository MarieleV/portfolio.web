import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Badges } from "./components/Badges";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Badges />
      <Contact />
      <Footer />
    </div>
  );
}
