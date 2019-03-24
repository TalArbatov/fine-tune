import React, { useState } from "react";
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actionGenerators';
const initialLogin = {
  username: "",
  password: ""
};

const Login = props => {
  const [getLogin, setLogin] = useState(initialLogin);
  const onInputChange = (input, type) => {
    console.log(`${type} : ${input}`);
    setLogin({ ...getLogin, [type]: input });
  };

  const submitForm = () => {
    console.log(getLogin)
    props.login(getLogin);
  }

  return (
    <div>
      <h3>Login: </h3>
      
      <label>Username: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "username")} />
      <br/>
      <label>Password: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "password")} />

      <button onClick={() => submitForm()}>Login</button>

    </div>
  );
};



export default Login