import React, { useState } from "react";
import styled from "styled-components";
import { API_Call_loginService } from "../api/api_calls";
import * as con from "../constant/constant";
import { useHistory } from "react-router-dom";
import { getWelcomeMessage } from "../../../.history/anywherefitness-fe/src/constant/constant_20211021091108";

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

  const cb_onSubmit = (event) => {
    event.preventDefault();

    API_Call_loginService(state)
      .then((res) => {
        console.log("API_Call_loginService, res.data = ", res.data);
        setToken(res.data.token);
        setRole(res.data.role_id);
        setUserID(res.data.user_id);
        setWelcomeMessage(res.data.message);
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
      <p>welcome message = {con.getWelcomeMessage()}</p>
      <p>token = {con.getToken()}</p>
      <p>user_id={con.getUserID()}</p>
    </Container>
  );
}
