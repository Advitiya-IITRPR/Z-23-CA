import "./css/dialog-styles.css";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const DialogBox = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.removeItem("Auth Token");
    const auth = getAuth();
    auth.signOut();
    dispatch({
      type: "GET_LEADERS_ACTION",
      payload: {},
    });
    dispatch({
      type: "GET_USER_ACTION",
      payload: { email: "" },
    });
    dispatch({ type: "GET_PROFILE_ACTION", payload: {} });
    navigate("/");
    // props.setEmail("");
    toast.info("Logout Successfuly");
  };
  return (
    <>
      <div className="dialog-container">
        <div className="dialog">
          <div className="dialog-head">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M2.7 21.825q-.975 0-1.462-.85-.488-.85.012-1.7L10.525 3.25q.5-.85 1.475-.85.975 0 1.475.85l9.275 16.025q.5.85.013 1.7-.488.85-1.463.85Zm9.3-11.55q-.45 0-.787.325-.338.325-.338.8v2.525q0 .45.338.787.337.338.787.338.475 0 .8-.338.325-.337.325-.787V11.4q0-.475-.325-.8-.325-.325-.8-.325Zm0 7.9q.525 0 .887-.363.363-.362.363-.887 0-.5-.363-.863-.362-.362-.862-.362-.525 0-.9.362-.375.363-.375.863 0 .525.375.887.375.363.875.363Z" />
            </svg>
            <span>Are you sure?</span>
          </div>
          <div className="dialog-btn">
            <button
              className="cancel"
              onClick={() => {
                props.setShowLogout(2);
              }}
            >
              Cancel
            </button>
            <button
              className="logout"
              onClick={() => {
                props.setShowLogout(2);
                Logout(props.email);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogBox;
