import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as con from "../constant/constant";
import ContextObject from "../context/context";

export default function NavBar() {
  const { GlobalState } = useContext(ContextObject);
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
        ?
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
