import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40vh;
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
  transition-duration: 0.8s;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

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
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.email}</div>
        </div>
        <div className="form-group">
          <label>
            <input
              value={values.username}
              onChange={onInputChange}
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label>
              <input
                value={values.password}
                onChange={onInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                value={values.email}
                onChange={onInputChange}
                type="email"
                name="email"
                placeholder="email"
              />
            </label>
          </div>
          <StyledButton type="submit" disabled={disabled}>
            Sign up
          </StyledButton>
        </div>
      </StyledDiv>
    </form>
  );
};

export default SignUpForm;

// onClick={() => history.push("/")}
