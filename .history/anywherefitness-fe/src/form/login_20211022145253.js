import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { API_Call_loginService } from "../api/api_calls";
import * as con from "../constant/constant";
import { useHistory } from "react-router-dom";
import ContextObject from "../context/context";

const Container = styled.div`
  border: solid 1px black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function LoginForm(props) {
  const initialState = {
    username: "",
    password: "",
  };
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const { GlobalState, set_GlobalState } = useContext(ContextObject);

  const cb_onSubmit = (event) => {
    event.preventDefault();

    API_Call_loginService(state)
      .then((res) => {
        console.log("API_Call_loginService, res.data = ", res.data);
        con.setToken(res.data.token);
        con.setRole(res.data.role_id);
        con.setUserID(res.data.user_id);
        con.setWelcomeMessage(res.data.message);
        set_GlobalState({
          ...GlobalState,
          token: res.data.token,
          user_id: res.data.user_id,
          role_id: res.data.role_id,
          welcomeMessage: res.data.welcomeMessage,
        });
        if (res.data.role_id === 1) {
          history.push("/instructor");
        } else {
          history.push("/client");
        }
      })
      .catch((error) => {
        console.log("block_log_in_as_client, error = ", error);
      });
  };

  const cb_onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    con.setRole("");
    con.setToken("");
    con.setUserID("");
    con.setWelcomeMessage("");
  }, []);

  return (
    <Container>
      <Form onSubmit={cb_onSubmit}>
        <label>
          {" "}
          <b>Username : </b>
          <input
            type="text"
            name="username"
            id="username"
            value={state.username}
            autoFocus
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          <b> Password : </b>
          <input
            type="text"
            name="password"
            id="password"
            value={state.password}
            onChange={cb_onChange}
          />
        </label>
        <button>Submit</button>
      </Form>
    </Container>
  );
}
