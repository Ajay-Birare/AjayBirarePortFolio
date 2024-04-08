import "./App.scss";
import "./App768.scss";

// -------------------------
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import Img from "./assets/react.svg";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div className="pagesContainer">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
