import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 20vh;

  h2 {
    font-size: 3rem;
    margin: 2% 0%;
  }

  label {
    margin: 0.5% 0%;
  }

`;

const StyledButton = styled.button`
  background-color: #005a87;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1% 0%;
  transition-duration: 0.3s;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`

const SignUpForm = (props) => {
  const { values, submit, inputChange, disabled, errors } = props;
  const history = useHistory();
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    history.push("/");
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <StyledDiv>
        <h2>Sign up</h2>
        <label>
          <input
            value={values.username}
            onChange={onInputChange}
            type="text"
            name="username"
            placeholder="Username"
          />
        </label>
        <div>{errors.username}</div>
        <label>
          <input
            value={values.password}
            onChange={onInputChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <div>{errors.password}</div>
        <label>
          <input
            value={values.email}
            onChange={onInputChange}
            type="email"
            name="email"
            placeholder="email"
          />
          <div>{errors.email}</div>
        </label>
        <StyledButton type="submit" disabled={disabled}>
          Sign up
          </StyledButton>
      </StyledDiv>
    </form>
  );
};

export default SignUpForm;
