import React from "react";
import fancyTable from "../assets/images/fancyTable.jpeg"
import festiveGarage from "../assets/images/festiveGarage.jpeg"

function Intro(props) {
  return (
    <div className="intro">
        <div class="intro-left">
            <img src={festiveGarage} alt="Guys in fancy suits watching a dancefloor in a very fancy garage with red paper lanterns" />
        </div>
        <div className="intro-middle">
            <h2>ON TO THE NEXT BIG THING</h2>
            <p>It is time to dream big. It is time to apply a lifetime of experience to new solutions. And it is time to do it myself since I don't have the money to pay others to do it - at least not yet.</p>
        </div>
        <div className="intro-right">
            <img src={fancyTable} alt="A very fancy table set for a dinner party" />
        </div>
    </div>
  );
}

export default Intro;