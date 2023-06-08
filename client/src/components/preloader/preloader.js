import "./pre-style.css";
const PreLoader = (props) => {
  return (
    <>
      <div className="main-loader">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loader-text">
          <h1>Please Wait</h1>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
