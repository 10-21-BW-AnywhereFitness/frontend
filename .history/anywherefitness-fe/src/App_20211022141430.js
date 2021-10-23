import React, { useContext, useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/home";
import Client from "./components/pages/client";
import Instructor from "./components/pages/instructor";
import Footer from "./components/Footer";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import ClientSearch from "./components/pages/ClientSearch";
import InstructorSearch from "./components/pages/instructorSearch";
import Reserved from "./components/pages/Reserved";
import ContextObject from "./context/context";
import Logout from "./components/pages/logout";

function App() {
  const initialState = {
    token: "",
    user_id: "",
    role_id: "",
    welcomeMessage: "",
    allAvailableClasses: [],
    clientReservedClasses: [],
    instructorClasses: [],
  };
  const [GlobalState, set_GlobalState] = useState(initialState);
  const setGlobalStateToDefault = () => {
    set_GlobalState(initialState);
  };

  const set_availableClasses = (array) => {
    set_GlobalState({ ...GlobalState, allAvailableClasses: array });
  };

  return (
    <ContextObject.Provider
      value={{ GlobalState, set_GlobalState, setGlobalStateToDefault }}
    >
      <div className="App">
        <header className="header">
          <div className="logo-bar">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Anywhere Fitness</h1>
            </Link>
          </div>
          <NavBar />
        </header>

        <div className="main-content">
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/client/search">
            <ClientSearch />
          </Route>

          <Route path="/instructor/search">
            <InstructorSearch />
          </Route>

          <Route path="/client/reserved">
            <Reserved />
          </Route>

          <Route path="/client">
            <Client />
          </Route>

          <Route path="/instructor">
            <Instructor />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </ContextObject.Provider>
  );
}

export default App;
