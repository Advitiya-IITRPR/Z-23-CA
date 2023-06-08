import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import Google from "./google.svg";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../firebase-config";
import PreLoader from "../preloader/preloader";
import { useDispatch } from "react-redux";

function LoginFirst() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const registerGoogle = () => {
    setLoading(true);
    const authentication = getAuth();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        dispatch({
          type: "GET_USER_ACTION",
          payload: {
            email: result.user,
            token: token,
          },
        });
        toast.success("Account Created Successfully");
        setLoading(false);
        navigate("/signup-step-2");
        // ...
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.cpassword === "" || user.email === "" || user.password === "") {
      toast.error("Please fill required fields first");
    } else if (user.cpassword === user.password) {
      const authentication = getAuth();
      setLoading(true);
      createUserWithEmailAndPassword(authentication, user.email, user.password)
        .then((response) => {
          navigate("/signup-step-3");
          toast.success("Account Created Successfuly");
          // response.user.sendEmailVerification();
          // authentication.signOut();
          dispatch({
            type: "GET_USER_ACTION",
            payload: {
              email: user.email,
            },
          });
          setLoading(false);
          navigate("/signup-step-2");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          } else if (error.code === "auth/weak-password") {
            toast.warning("Weak Password");
          } else if (error.code === "auth/invalid-email") {
            toast.warning("Invalid Email");
          } else {
            toast.error(error.code);
          }
          setLoading(false);
        });
    } else {
      toast.error("Password and Confirm Password don't match");
      setLoading(false);
    }
  };
  return (
    <>
      {(() => {
        if (loading) {
          return <PreLoader />;
        }
      })()}
      <div className="form-container">
        <form className="custom-form" noValidate onSubmit={handleSubmit}>
          <h3> Register - 1 / 2 </h3>{" "}
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={user.email}
            name="email"
            onChange={(e) => onInputChange(e)}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => onInputChange(e)}
          />{" "}
          <input
            type="password"
            placeholder="Confirm Password"
            id="cpassword"
            value={user.cpassword}
            name="cpassword"
            onChange={(e) => onInputChange(e)}
          />{" "}
          <button type="submit"> Register </button>{" "}
          <div className="seprate-div">
            <div />
            Or <div />
          </div>{" "}
          <div className="social">
            <Link className="fb" onClick={registerGoogle}>
              <img src={Google} alt="" srcSet="" />
              <span>Register with Google</span>
            </Link>{" "}
          </div>{" "}
          <small
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Already have account ? <Link to={"/login"}> Login </Link>{" "}
          </small>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
}

export default LoginFirst;
