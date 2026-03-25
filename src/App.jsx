import React from "react";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
