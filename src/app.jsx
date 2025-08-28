import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="">hello gsap</h1>
    </div>
  );
}

export default App;
