import React from "react";
import ma from "../assets/images/ma.jpeg"

function Aboutme(props) {
  return (
    <div className="about-me">
        <img className="about-img" src={ma} alt="a handsome man" />
        <h1 className="about-title">Mark Artim</h1>
        <h2 className="about-subtitle">Full Stack Developer</h2>
        <div className="about-text">
            <p>I have been around wholesale distribution for most of my life. After working at a distributor for five years after college I joined the software company that we had implemented to run the business. I did implementation consulting for eight years and then wanting to have more impact on the software I joined Product Management and never looked back.</p>
            <p> I now look forward to utilizing the knowledge gained over 30 years and creating software that is deep enough in functionality to solve the complex needs of running a business yet is easy to understand. Software that is transparent in configuration and what it designed to do. Balancing a tailored solution that fits your business with the abiltiy to extend it when you need to solve new probelms or old problems in a new way.</p>
        </div>
    </div>
  );
}

export default Aboutme;