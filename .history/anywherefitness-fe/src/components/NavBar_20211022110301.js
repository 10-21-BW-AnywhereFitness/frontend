import React from "react";
import { Link } from "react-router-dom";
import * as con from "../constant/constant";

export default function NavBar() {
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
        {con.getToken===""? :}Login
      </Link>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        Signup
      </Link>
    </div>
  );
}
