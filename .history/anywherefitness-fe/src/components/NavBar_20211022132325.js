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
      <Link to="/client" style={{ textDecoration: "none" }}>
        Client
      </Link>
      {
        GlobalState.token !== "" && GlobalState.role_id ===1 
        ?<Link to="/instructor" style={{ textDecoration: "none" }}>
        Instructor
      </Link>
        :

      }
      
      <Link to="/login" style={{ textDecoration: "none" }}>
        {GlobalState.token === "" ? "Log In" : "Log Out"}
      </Link>
      {GlobalState.token === "" ? (
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup
        </Link>
      ) : null}
    </div>
  );
}
