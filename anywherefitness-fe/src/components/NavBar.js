import React from "react";
import { Link } from "react-router-dom";
import * as con from "../constant/constant";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        Home
      </Link>
      <Link to="/client">
        Client
      </Link>
      <Link to="/instructor">
        Instructor
      </Link>
      <Link to="/login">
        {con.getToken !== "" ? "Log In" : "Log Out"}
      </Link>
      {con.getToken !== "" ? (
        <Link to="/signup">
          Signup
        </Link>
      ) : null}
    </div>
  );
}
