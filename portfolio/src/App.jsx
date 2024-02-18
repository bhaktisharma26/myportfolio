import { useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-r from-gray-800 to-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
