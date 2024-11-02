import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.js";
//import About from "./components/About.js";
//import { Route } from "react-router";

import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const touggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils - enable dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - enable light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Format"
        aboutText="About Us"
        mode={mode}
        touggleMode={touggleMode}
      />
      {/* if we are not use exact -->
        ..
        /user --> component1
        /user/home--> --> component1
        .. */}
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
        <TextForm heading="Please Enter the text in billow : " mode={mode} />
        {/* }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
