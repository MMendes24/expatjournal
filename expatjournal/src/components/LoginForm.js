import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40vh;
`;

const SigninForm = (props) => {
  const { values, submit, inputChange } = props;
  const history = useHistory();
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <StyledDiv>
        <h2>Sign in</h2>
        <div className="form-group">
          <label>
            <input
              value={values.username}
              onChange={onInputChange}
              type="text"
              name="username"
              placeholder="username"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              value={values.password}
              onChange={onInputChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
        </div>
        <button onClick={() => history.push("/add-story")}>Login</button>
      </StyledDiv>
    </form>
  );
};
export default SigninForm;
