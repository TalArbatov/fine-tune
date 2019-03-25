import React, { useState, Suspense } from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionGenerators";
import styled from "styled-components";
const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: ""
};
const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`;

const Register = props => {
  const [getRegister, setRegister] = useState(initialRegister);
  const onInputChange = (input, type) => {
    setRegister({ ...getRegister, [type]: input });
  };

  const submitForm = () => {
    props.register(getRegister);
  };

  let errMsg;

  if (props.errMsg.server != "")
    errMsg = <p style={{ color: "red" }}>{props.errMsg.server}</p>;

  if (props.errMsg.client != "")
    errMsg = <p style={{ color: "red" }}>{props.errMsg.client}</p>;
  return (
    <Form>
      <div>
        <h3>Register: </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <label>First Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={e => onInputChange(e.target.value, "firstName")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={e => onInputChange(e.target.value, "lastName")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email: </label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={e => onInputChange(e.target.value, "email")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Username: </label>
              </td>
              <td>
                <input
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
            <tr>
              <td>
                <label>Confirm password: </label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={e =>
                    onInputChange(e.target.value, "confirmPassword")
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => submitForm()}>Register</button>
        <div>{errMsg && errMsg}</div>
      </div>
    </Form>
  );
};

//const LazyRegister = React.lazy() => Register

export default Register;
