import React, { useEffect, useState } from "react";
import Home3 from "./Home3";
import Home2 from "./Home2";
import "./home-style.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Testimonials from "../Testimonials/testimonial";
import About from "./about";

function Home(props) {
  return (
    <section>
      <div className="home-container">
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={require("./Video/video-bg.mp4")} type="video/mp4" />
        </video>
        <div className="home-content">
          <div className="header">
            <h1>
              <Tilt>Zeitgeist'23</Tilt>
            </h1>
          </div>
          <div className="subheader">
            <h1> Campus Ambassador Program</h1>
          </div>
          {(() => {
            if (!props.email) {
              return (
                <>
                  <div className="registration-btn">
                    <Link to={"/signup"}>Register</Link>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="registration-btn">
                    <Link to={"/profile"}>Profile</Link>
                  </div>
                </>
              );
            }
          })()}
        </div>
      </div>
      <About />
      <Home2 />
      <Home3 />
      <Testimonials />
    </section>
  );
}

export default Home;
