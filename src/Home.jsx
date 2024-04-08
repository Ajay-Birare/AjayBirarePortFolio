import { IoMdHand } from "react-icons/io";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import Pic from "/src/assets/profile3-removebg-preview.png";
export default function Home() {
  return (
    <div className="content home">
      <div>
        <img className="profilePic" src={Pic} alt="Profile" />
      </div>
      <div className="intro">
        <h1>
          Hello,
          <span className="hello">
            <IoMdHand className="hello" />
          </span>
        </h1>
        <h1>
          My Name is <span className="name"> Ajay Birare</span>
        </h1>
        <h2>I am a Frontend Devloper</h2>
        <div className="connection ">
          <a href="https://twitter.com/AjayBirare18" target="_blank">
            <FaTwitter className="icon" />
          </a>
          <a href="www.linkedin.com/in/ajay-birare" target="_blank">
            <FaLinkedin className="icon" />
          </a>{" "}
          <a href="https://github.com/Ajay-Birare" target="_blank">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
