import React, { useState } from "react";
import PreLoader from "../preloader/preloader";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import { getAuth } from "firebase/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassowrd() {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      toast.error("Fill required field first");
    } else {
      await sendPasswordResetEmail(email);
      toast.success(
        "Email sent successfully. Please check promotions or spam folder also"
      );
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="form-container">
        <form className="custom-form" noValidate onSubmit={handleResetPassword}>
          <h3> Forgot Password </h3>{" "}
          <input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <button type="submit">
            {(() => {
              if (loading) {
                return <div className="spinner"></div>;
              } else {
                return <>Send Email</>;
              }
            })()}{" "}
          </button>{" "}
          <small>
            <Link to={"/login"}> Login </Link>{" "}
          </small>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
}

export default ForgotPassowrd;
