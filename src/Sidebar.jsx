import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h2>Sidebar</h2> */}
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Skills">Skills</NavLink>
      <NavLink to="/Education">Education</NavLink>
    </div>
  );
}
