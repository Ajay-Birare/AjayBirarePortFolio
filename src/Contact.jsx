import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="content contact">
      <div>
        <h1>Contact</h1>
      </div>
      <div className="contactContainer">
        <div className="connectionLinks">
          <h3>
            <MdEmail className="connectionIcon" />
          </h3>
          <a href="mailto:ajaybirare@gmail.com" target="_blank">
            ajaybirare516@gmail.com
          </a>
        </div>
        <div className="connectionLinks">
          <h3>
            <FaLinkedin className="connectionIcon" />
          </h3>
          <a href="https://www.linkedin.com/in/ajay-birare/" target="_blank">
            Ajay Birare
          </a>
        </div>

        <div className="connectionLinks">
          <h3>
            <FaTwitter className="connectionIcon" />
          </h3>
          <a href="https://twitter.com/AjayBirare18">Twitter</a>
        </div>
      </div>
    </div>
  );
}
