import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <div className="h-dvh"></div>
    </main>
  );
}

export default App;
