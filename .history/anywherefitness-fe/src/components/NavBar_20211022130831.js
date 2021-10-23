import React,{useContext} from "react";
import { Link } from "react-router-dom";
import * as con from "../constant/constant";
import ContextObject from "../context/context";

export default function NavBar() {
  const {GlobalState} from 
  return (
    <div className="nav-bar">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/client" style={{ textDecoration: "none" }}>
        Client
      </Link>
      <Link to="/instructor" style={{ textDecoration: "none" }}>
        Instructor
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        {con.getToken !== "" ? "Log In" : "Log Out"}
      </Link>
      {con.getToken !== "" ? (
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup
        </Link>
      ) : null}
    </div>
  );
}
