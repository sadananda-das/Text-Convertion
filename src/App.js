import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const touggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Text Format"
        aboutText="About Us"
        mode={mode}
        touggleMode={touggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text in billow : " mode={mode}/>
      </div>
      <About mode={mode}/>
    </>
  );
}

export default App;
