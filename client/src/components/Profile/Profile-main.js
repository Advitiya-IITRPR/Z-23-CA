import { isValidElement } from "react";
import { useState } from "react";
import "./css/profile-main-styles.css";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";
import LoaderProfile from "./loader-profile";
import _CA_GUIDE from "./CA_guide";
import DialogBox from "../Dialog Box/DialogBox";

const Profile_main = (props) => {
  const values = [
    { id: 1, text: "PROFILE" },
    { id: 2, text: "LEADERBOARD" },
    { id: 3, text: "CA GUIDE" },
  ];
  const [loading, setLoading] = useState(true);
  const [isActive, setActive] = useState(1);

  const handleTabs = (val) => {
    setTimeout(() => {
      setLoading(true);
    }, 50);
    setActive(val);
    setLoading(false);
  };
  return (
    <div className="profile-main">
      <div className="profile-card">
        <div className="profile-tabs">
          {" "}
          {values.map((val) => (
            <button
              key={val.id}
              onClick={() => handleTabs(val.id)}
              className={`${isActive === val.id ? "active" : ""}`}
            >
              {val.text}{" "}
            </button>
          ))}{" "}
          <button
            style={{
              display: "flex",
              flexWrap: "nowrap",
            }}
            className="logout-second"
            onClick={() => {
              props.showLogout === 1
                ? props.setShowLogout(2)
                : props.setShowLogout(1);
            }}
          >
            <span
              style={{
                marginRight: "5px",
              }}
            >
              LOG OUT
            </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="var(--hell-primary)"
            >
              <path d="M5.125 21.5q-1.025 0-1.737-.712-.713-.713-.713-1.738V5.45q0-1.025.713-1.738Q4.1 3 5.125 3H12v2.15H5.125q-.1 0-.2.1t-.1.2v13.6q0 .1.1.2t.2.1H12v2.15Zm10.925-3.975-1.55-1.6 2.625-2.625H8.9v-2.15h8.225L14.5 8.525l1.55-1.55 5.275 5.275Z" />
            </svg>{" "}
          </button>
        </div>{" "}
        <div className="main-content">
          <div className="profile-data-main">
            {" "}
            {(() => {
              if (!loading) {
                return (
                  <>
                    <div className="yes1">
                      <LoaderProfile />
                    </div>{" "}
                  </>
                );
              } else {
                return (
                  <>
                    <div
                      className={`${isActive === values[0].id ? "yes" : "no"}`}
                    >
                      <Profile
                        email={props.email}
                        isVarified={props.isVarified}
                      />{" "}
                    </div>{" "}
                    <div
                      className={`${
                        isActive === values[1].id ? "yes1" : "no1"
                      }`}
                    >
                      <Leaderboard
                        email={props.email}
                        isVarified={props.isVarified}
                      />{" "}
                    </div>{" "}
                    <div
                      className={`${
                        isActive === values[2].id ? "yes1" : "no1"
                      }`}
                    >
                      <_CA_GUIDE />
                    </div>{" "}
                  </>
                );
              }
            })()}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Profile_main;
