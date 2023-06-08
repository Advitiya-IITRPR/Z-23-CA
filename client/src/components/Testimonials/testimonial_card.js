import { useState } from "react";
import "./testimonials-styles.css";
import { Link } from "react-router-dom";

const TestimonialCard = (props) => {
  const [Height, setHeight] = useState(200);
  const handleMore = () => {
    Height === 200 ? setHeight(props.description.length) : setHeight(200);
  };
  return (
    <>
      <figure className="snip1390">
        <figcaption>
          <h2> {props.name} </h2> <h4> {props.college} </h4>{" "}
          <blockquote>
            {" "}
            {props.description.toString().substring(0, Height)}{" "}
            <Link
              to={""}
              onClick={handleMore}
              style={{
                margin: "0 10px",
              }}
            >
              {Height === 200 ? "Read More" : "Read Less"}{" "}
            </Link>{" "}
          </blockquote>{" "}
        </figcaption>{" "}
      </figure>{" "}
    </>
  );
};

export default TestimonialCard;
