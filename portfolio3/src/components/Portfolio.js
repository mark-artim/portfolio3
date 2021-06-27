import React from "react";
import jenshens from "../assets/images/jenshens.png"
import techblog from "../assets/images/techblog.jpg"
import weatherdash from "../assets/images/weatherDash.jpg"
import madotcom from "../assets/images/madotcom.jpg"
import empdirectory from "../assets/images/EmpDirectory.jpg"

function Portfolio(props) {
  return (
    <div className="App-welcome">
      <section className="portfolio">
      <h1 className="portfolio-title">My Work</h1>
        <div className="container">
            {/* <!-- Portfolio Item #1 --> */}
            <figure className="portfolio-item featured">
                <img src={jenshens} alt="A web page for an ecommerce site that caters to Artisinal Egg Boutiques aka people who have chickens and sell eggs"/>
                <figcaption>
                    <h2 className="portfolio-title">Jenn's Hens Ecommerce Site</h2>
                    <p className="portfolio-desc">This is an ecommerce site that caters to the needs of Artisinal Egg Boutiques aka people who have chickens and want to sell their eggs.
                    </p>
                    <ul className="portfolio-desc">Technology Used
                        <li>HTML, CSS & JavaScript</li>
                        <li>Handlebars Template Engine</li>
                        <li>Materialize Framework</li>
                        <li>MySql database</li>
                        <li>Express JS/Express Session</li>
                        <li>Paypal Payment Structure</li>
                        <li>Instagram API Gallery</li>
                      </ul>
                    <a href="https://secure-ravine-09245.herokuapp.com/" className="portfolio-link">Site Link</a>
                </figcaption>
            </figure>
            {/* <!-- Portfolio Item #2 --> */}
            <figure className="portfolio-item">
                <img src={empdirectory} alt="An employee search web page that searches by employee name" />
                <figcaption>
                    <h2 className="portfolio-title">Employee Directory</h2>
                    <p className="portfolio-desc">Employee directory using React. Developed the application's UI using components, managing component state and responding to user events.</p>
                    <ul className="portfolio-desc">Technology Used
                        <li>HTML, CSS & JavaScript</li>
                        <li>React</li>
                        <li>Axios</li>
                      </ul>
                    <a href="https://mark-artim.github.io/EmployeeDirectory/" className="portfolio-link">Site Link</a>
                </figcaption>
            </figure>
            {/* <!-- Portfolio Item #3 --> */}
            <figure className="portfolio-item">
                <img src={weatherdash} alt="A web page for the Weather Dashboard that shows the current weather and a five day forecast" />
                <figcaption>
                    <h2 className="portfolio-title">Weather Dashboard</h2>
                    <p className="portfolio-desc">A weather application that allows you to search cities and see the current weather along with the five day forecast.</p>
                    <ul className="portfolio-desc">Technology Used
                        <li>HTML, CSS & JavaScript</li>
                        <li>Bootstrap CSS</li>
                        <li>Fetch api calls to openweather</li>
                        <li>User history stored in local storage</li>
                      </ul>
                    <a href="https://mark-artim.github.io/WeatherDashboard/" className="portfolio-link">Site Link</a>
                </figcaption>
            </figure>
            {/* <!-- Portfolio Item #4 --> */}
            <figure className="portfolio-item">
                <img src={madotcom} alt="A web page for Mark Artim dot com that has pictures of Mark and friends and links to other pages" />
                <figcaption>
                    <h2 className="portfolio-title">My Personal Website</h2>
                    <p className="portfolio-desc">An AWS hosted site where I host conceptual ideas for future web developement.</p>
                    <a href="https://www.markartim.com" className="portfolio-link">Site Link</a>
                </figcaption>
            </figure>
            {/* <!-- Portfolio Item #2 --> */}
            <figure className="portfolio-item">
                <img src={techblog} alt="A web page posting tech related topics for discussion " />
                <figcaption>
                    <h2 className="portfolio-title">Tech Blog</h2>
                    <p className="portfolio-desc">A web page posting tech related topics for discussion. Supports user registration and login capabilities on a keroku hosted site.</p>
                    <ul className="portfolio-desc">Technology Used
                        <li>HTML, CSS & JavaScript</li>
                        <li>Handlebars Template Engine</li>
                        <li>Materialize Framework</li>
                        <li>MySql database</li>
                        <li>Express JS/Express Session</li>
                      </ul>
                    <a href="https://serene-gorge-88856.herokuapp.com/" className="portfolio-link">Site Link</a>
                </figcaption>
            </figure>
        </div>
    </section>

    </div>
  );
}

export default Portfolio;