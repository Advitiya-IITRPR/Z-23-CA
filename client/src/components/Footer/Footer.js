import React from "react";
import "./footer-style.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="myfooter">
          <div className="myrow">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/zeitgeist_iitrpr/?hl=en"
              target={"_blank"}
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.youtube.com/@ZeitgeistIITRopar"
              target={"_blank"}
            >
              <i className="fa fa-youtube"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/zeitgeist.iitrpr/"
              target={"_blank"}
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://in.linkedin.com/in/zeitgeist-iit-ropar-aa2bb6166"
              target={"_blank"}
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/zeitgeist_rpr"
              target={"_blank"}
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="myrow">
            Copyright © 2023 Zeitgeist - Sponsored by&nbsp;{" "}
            <a rel="noreferrer" href="https://webguruz.in/" target={"_blank"}>
              WebGuruz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
