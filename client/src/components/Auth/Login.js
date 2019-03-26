import React, { useState } from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionGenerators";
import styled from "styled-components";
import PropTypes from "prop-types";
import AppContext from '../../contexts/themeContext';

const initialLogin = {
  username: "",
  password: ""
};

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`;

const Login = (props, context) => {
  console.log("context");
  console.log(context);
  const [getLogin, setLogin] = useState(initialLogin);
  console.log(getLogin);
  const onInputChange = (input, type) => {
    setLogin({ ...getLogin, [type]: input });
  };

  const submitForm = () => {
    props.login(getLogin);
  };

  return (
    <Form key="1">
      <div>
        <h3>Login: </h3>

        <table>
          <tbody>
            <tr>
              <td>
                <label>Username: </label>
              </td>
              <td>
                <input
                  key="1"
                  value={getLogin.username}
                  type="text"
                  onChange={e => onInputChange(e.target.value, "username")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password: </label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={e => onInputChange(e.target.value, "password")}
                />
              </td>
            </tr>
          </tbody>
        </table>
         <AppContext.Consumer>
        {(context) => (<div>
          <p>username: {context.primary}</p>
        </div>)}
        </AppContext.Consumer>
        <button onClick={() => submitForm()}>Login</button>
        <p style={{ color: "red" }}>{props.errMsg}</p>
      </div>
    </Form>
  );
};

export default Login;
