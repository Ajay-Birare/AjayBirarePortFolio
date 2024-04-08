import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">Ajay B.</div>
      <div className="right rFLex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
    </div>
  );
}
