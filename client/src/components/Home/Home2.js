import React, { useEffect, useState } from "react";
import "./home2-styles.css";

function Home2() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [SlidesView, setSlidesView] = useState(3);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  useEffect(() => {
    if (windowDimenion.winWidth < 799) {
      setSlidesView(1.2);
    } else {
      setSlidesView(3);
    }
  }, [windowDimenion]);
  return (
    <>
      <div className="home-about">
        <div className="header">
          <h1> Why Participate? </h1>{" "}
        </div>{" "}
        <div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1> Perks </h1>{" "}
              </div>{" "}
              <hr />
              <div className="content-text">
                <ul
                  style={{
                    listStyle: "circle",
                  }}
                >
                  <li>Free entry on 30+ participation.</li>
                  <li>
                    Certificates of Appreciation as a recognition of your hard
                    work.
                  </li>
                  <li>
                    CA’s will get a Free entry for various workshops and talks
                    being conducted.
                  </li>
                  <li>
                    Discount coupons for star nights on 50+ participation
                    Discount for participating in events.
                  </li>
                </ul>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1> Why you should be a Campus Ambassador?</h1>{" "}
              </div>{" "}
              <hr />
              <div className="content-text">
                <ul
                  style={{
                    listStyle: "circle",
                  }}
                >
                  <li>Development of Oratory and Managerial Skills</li>
                  <li>
                    Networking with a nationwide student community and
                    interaction with like - minded people.
                  </li>
                  <li>
                    Represent your College at a National level as a Leader.
                  </li>
                  <li>
                    Improve your CV and thus be recognised by top companies.
                  </li>
                </ul>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1> Responsibilities </h1>{" "}
              </div>{" "}
              <hr />
              <div className="content-text">
                <ul
                  style={{
                    listStyle: "circle",
                  }}
                >
                  <li>
                    You will be acting as the liaison of your respective
                    University/ College by being the point of contact between
                    the Zeitgeist 22 Team and your College Students
                  </li>
                  <li>
                    Publicity through Social Media, Posters, Campaigns,
                    Workshops, etc.
                  </li>
                  <li>
                    Organizing events and workshops regarding Zeitgeist 22 for
                    the selection of Representatives and teams from your
                    respective college.
                  </li>
                  <li>
                    Collecting feedback from the students of your college at a
                    ground level.
                  </li>
                </ul>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default Home2;
