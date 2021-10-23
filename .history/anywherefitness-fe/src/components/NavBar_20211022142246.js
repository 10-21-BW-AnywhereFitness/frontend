import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as con from "../constant/constant";
import ContextObject from "../context/context";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const { GlobalState } = useContext(ContextObject);
  const history = useHistory();
  return (
    <div className="nav-bar">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      {GlobalState.role_id === 2 ? (
        <Link to="/client" style={{ textDecoration: "none" }}>
          Client
        </Link>
      ) : (
        history.push("/")
      )}

      {GlobalState.role_id === 2 ? (
        <Link to="/client/search" style={{ textDecoration: "none" }}>
          Search Class
        </Link>
      ) : null}

      {GlobalState.token !== "" && GlobalState.role_id === 2 ? (
        <Link to="/client/reserved" style={{ textDecoration: "none" }}>
          Reserved
        </Link>
      ) : null}

      {GlobalState.token !== "" && GlobalState.role_id === 1 ? (
        <Link to="/instructor" style={{ textDecoration: "none" }}>
          Instructor
        </Link>
      ) : (
        history.push("/")
      )}

      {GlobalState.token === "" ? (
        <Link to="/login" style={{ textDecoration: "none" }}>
          Log In
        </Link>
      ) : null}

      {GlobalState.token !== "" ? (
        <Link to="/logout" style={{ textDecoration: "none" }}>
          Log Out
        </Link>
      ) : null}

      {GlobalState.token === "" ? (
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup
        </Link>
      ) : null}
    </div>
  );
}
