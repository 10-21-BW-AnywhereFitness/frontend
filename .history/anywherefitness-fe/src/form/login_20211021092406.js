import React, { useState } from "react";
import styled from "styled-components";
import { API_Call_loginService } from "../api/api_calls";
import {
  setToken,
  setUserID,
  setWelcomeMessage,
  setRole,
} from "../constant/constant";
import { useHistory } from "react-router-dom";

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
        console.log("res = ", res);
        setToken(res.data.token);
        console.log("res.data.user_id = ", res.data.user_id);
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
    </Container>
  );
}
