import React from "react";
function Pre(props) {
  return (
    <>
      {props.load && (
        <div className="loader-main">
          {/* <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src={require("./Video/video-bg.mp4")} type="video/mp4" />
          </video> */}
          <div className="loader-head-main">
            <h1>Zeitgest"23</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Pre;
// function Pre(props) {
//   return <div id={props.load ? "preloader" : "preloader-none"}>

//   </div>;
// }
