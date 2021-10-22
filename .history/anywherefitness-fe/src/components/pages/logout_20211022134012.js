import React, { useContext, useEffect } from "react";
import ContextObject from "../../context/context";
import { useHistory } from "react-router-dom";
import 

const Logout = (props) => {
  const { GlobalState } = useContext(ContextObject);

  return (
    <div>
      <h2>Logout.js</h2>
    </div>
  );
};

export default Logout;
