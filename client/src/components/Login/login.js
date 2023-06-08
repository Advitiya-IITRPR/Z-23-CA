import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/login-styles.css";
import Google from "./google.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../firebase-config";
import PreLoader from "../preloader/preloader";
import { useDispatch } from "react-redux";
import { fetchLeadersData } from "../auth/requests/getLeadersData";
import { fetchProfileData } from "../auth/requests/getProfileData";

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  let navigate = useNavigate();
  const loginGoogle = async () => {
    const authentication = getAuth();
    await signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // console.log(credential);
        // The signed-in user info.
        // const user = result.user;
        dispatch({
          type: "GET_USER_ACTION",
          payload: { email: result.user },
        });
        fetchLeadersData(dispatch, navigate);
        fetchProfileData(dispatch, result.user, navigate);
        toast.success("Logged In  Successfully");
        window.location.replace("/profile");
        // ...
      })
      .catch((error) => {
        toast.error("Something went wrong, Try Again!");
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      toast.error("Fill required field first");
    } else {
      setLoading(true);
      const authentication = getAuth();
      await signInWithEmailAndPassword(
        authentication,
        user.email,
        user.password
      )
        .then((response) => {
          console.log(user.getIdToken());
          dispatch({
            type: "GET_USER_ACTION",
            payload: {
              email: user.email,
            },
          });
          fetchLeadersData(dispatch, navigate);
          fetchProfileData(dispatch, user.email, navigate);
          setLoading(false);
          toast("Please Wait...");
          setTimeout(() => {
            toast.success("Logged in");
            navigate("/profile");
          }, 2000);
        })
        .catch((error) => {
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found"
          ) {
            toast.error("Email or Password is wrong");
            setLoading(false);
          } else {
            toast.error(error.code);
            setLoading(false);
          }
        });
    }
  }
  return (
    <>
      <div className="form-container">
        {" "}
        {(() => {
          if (loading) {
            return <PreLoader />;
          }
        })()}{" "}
        <form className="custom-form" noValidate onSubmit={handleSubmit}>
          <h3> Login Here </h3>{" "}
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={user.email}
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
          <button typeof="submit" as={Link}>
            Log In{" "}
          </button>{" "}
          <div className="seprate-div">
            <div />
            Or <div />
          </div>{" "}
          <div className="social">
            <Link className="fb" onClick={loginGoogle}>
              <img src={Google} alt="" srcSet="" />
              <span> Sign In with Google </span>{" "}
            </Link>{" "}
          </div>{" "}
          <small>
            <Link to={"/forgot-password"}> Forgot Password </Link>{" "}
          </small>{" "}
          <small>
            Don 't have account? <Link to={"/signup"}>SignUp</Link>{" "}
          </small>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
}

export default Login;
