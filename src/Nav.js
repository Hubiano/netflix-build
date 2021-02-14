import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "./features/userSlice";
import "./nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const user = useSelector(selectUser);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fnetflix-logo-0.png&f=1&nofb=1"
          alt="netflix"
        />
        <div class="nav__userName">
          <h5> {user.email}</h5>
        </div>
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
