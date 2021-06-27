import React from "react";
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"
import instagram from "../assets/images/instagram.png"

function Footer(props) {
  return (
    <div className="footer">
        <p>Follow me on social media</p>
        <div className="social-icons">
          <a href="https://github.com/mark-artim">
              <img alt="Github" src={github}
                    class="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/mark-artim">
              <img alt="Linkedin" src={linkedin} 
                    class="social-icon" />
          </a>
          <a href="https://www.instagram.com/markartim/">
              <img alt="Instagram" src={instagram}
                    class="social-icon" />
          </a>
        </div>
    </div>
  )};

export default Footer;