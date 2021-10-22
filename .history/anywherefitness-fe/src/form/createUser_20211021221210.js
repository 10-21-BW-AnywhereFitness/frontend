import React, { useState } from "react";
import styled from "styled-components";
import { API_CALL_registerUser } from "../api/api_calls";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  border: solid 1px black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function CreateUserForm(props) {
  const initialState = {
    username: "",
    password: "",
    passwordVerify: "",
    role: "client",
    error: null,
    successMessage: null,
  };
  const [state, setState] = useState(initialState);

  const cb_onSubmit = (event) => {
    event.preventDefault();
    API_CALL_registerUser({
      username: state.username,
      password: state.password,
      role_id: state.role,
    })
      .then((res) => {
        console.log("res = ", res);
        setState({ ...state, successMessage: JSON.stringify(res.data) });
        history.push("/login");
      })
      .catch((err) => {
        console.log("err = ", err);
        setState({ ...state, error: JSON.stringify(err) });
      });

    setState(initialState);
  };

  const cb_onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Form onSubmit={cb_onSubmit}>
        <label>
          {" "}
          <b> New Username : </b>
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
          <b> New Password: </b>
          <input
            type="text"
            name="password"
            id="password"
            value={state.password}
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          <b> Very Password : </b>
          <input
            type="text"
            name="passwordVerify"
            id="passwordVerify"
            value={state.passwordVerify}
            onChange={cb_onChange}
          />
        </label>
        <label>
          {" "}
          <b> Select a role : </b>
          <select
            value={state.role}
            name="role"
            id="role"
            onChange={cb_onChange}
          >
            <option value="client">client</option>
            <option value="instructor">instructor</option>
          </select>
        </label>

        <button>Create New User</button>
        {state.error && (
          <p>
            <b>error message : </b>
            <i>{state.error}</i>
          </p>
        )}
        {state.successMessage && (
          <p>
            <b>success message </b>
            <i>{state.successMessage}</i>
          </p>
        )}
      </Form>
    </Container>
  );
}
