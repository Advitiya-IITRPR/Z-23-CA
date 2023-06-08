import "./music-style.css";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { useRef } from "react";

const _BackgroundMusic = () => {
  const audioRef = useRef();
  const [toggleSound, setToggleSound] = useState(false);
  const handleVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };
  return (
    <>
      <div className="music-main">
        {(() => {
          if (toggleSound === true) {
            return (
              <div className="sound">
                {/* <audio ref={audioRef} autoPlay={true} controls={false}>
                  <source type="audio/mp3" src={require("./audio-bg.mp3")} />
                </audio> */}
                <audio src={require("./audio-bg.mp3")} controls />
                <audio
                  controlsList="nodownload"
                  ref={audioRef}
                  autoPlay={true}
                  controls
                >
                  <source type="audio/mp3" src={require("./audio-bg.mp3")} />
                </audio>
              </div>
            );
          }
        })()}
        <div className="buttons">
          <input type="range" className="volume" onChange={handleVolume} />
          {(() => {
            if (toggleSound === true) {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  width="40"
                  fill="var(--light-primary)"
                  onClick={() => {
                    toggleSound === true
                      ? setToggleSound(false)
                      : setToggleSound(true);
                  }}
                >
                  <path d="M22.875 36.583V33q4.542-1.125 7.396-4.771t2.854-8.312q0-4.625-2.854-8.25t-7.396-4.75V3.333q6.042 1.125 9.896 5.813 3.854 4.687 3.854 10.771 0 6.166-3.854 10.875-3.854 4.708-9.896 5.791Zm-19.5-11.041V14.458h7.083l9.084-9.166v29.416l-9.084-9.166Zm18.958 1.666V12.792q2.292.791 3.667 2.771 1.375 1.979 1.375 4.437T26 24.438q-1.375 1.979-3.667 2.77Z" />
                </svg>
              );
            } else {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  width="40"
                  fill="var(--light-primary)"
                  onClick={() => {
                    toggleSound === true
                      ? setToggleSound(false)
                      : setToggleSound(true);
                  }}
                >
                  <path d="m34 38.75-4.875-4.875q-1.458.958-3.083 1.667-1.625.708-3.459 1.041V33q1.084-.25 2.084-.646t1.916-1.021l-7.333-7.375v10.75l-9.125-9.166H3.083V14.458h6.625L.917 5.625l2.458-2.5L36.5 36.208Zm.125-10.542-2.583-2.583q.666-1.333.958-2.75.292-1.417.292-2.958 0-4.667-2.834-8.355-2.833-3.687-7.375-4.645V3.333q6 1.125 9.855 5.813 3.854 4.687 3.854 10.771 0 2.208-.542 4.312t-1.625 3.979Zm-7.167-7.166-4.375-4.375v-3.709q2.084.959 3.292 2.855 1.208 1.895 1.208 4.187 0 .292-.021.542-.02.25-.104.5Zm-7.708-7.709-4-4.041 4-4Z" />
                </svg>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default _BackgroundMusic;
