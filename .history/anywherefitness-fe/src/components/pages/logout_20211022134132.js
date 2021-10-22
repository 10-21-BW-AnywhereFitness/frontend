import React, { useContext, useEffect } from "react";
import ContextObject from "../../context/context";
import { useHistory } from "react-router-dom";
import * as con from "../../constant/constant";

const Logout = (props) => {
  const { GlobalState } = useContext(ContextObject);
  const history = useHistory();
  useEffect(() => {
    con.setRole("");
    const
    history.push("/")
  }, []);

  return (
    <div>
      <h2>Logout.js</h2>
    </div>
  );
};

export default Logout;