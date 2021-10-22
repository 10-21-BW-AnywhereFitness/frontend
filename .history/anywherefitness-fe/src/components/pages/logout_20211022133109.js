import React,{useContext} from "react";
import ContextObject from "../../context/context";

const Logout = (props) => {
  const {GlobalState} = useConext(ContextObject);
  return (
    <div>
      <h2>Logout.js</h2>
    </div>
  );
};

export default Logout;
