import React, { useState } from "react";
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actionGenerators';
const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: ""
};

const Register = props => {
  const [getRegister, setRegister] = useState(initialRegister);
  const onInputChange = (input, type) => {
    console.log(`${type} : ${input}`);
    setRegister({ ...getRegister, [type]: input });
  };

  const submitForm = () => {
    console.log(getRegister)
    props.register(getRegister);
  }

  return (
    <div>
      <h3>Register: </h3>
      <label>First Name: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "firstName")} />
      <br/>
      <label>Last Name: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "lastName")} />
      <br/>
      <label>Email: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "email")} />
      <br/>
      <label>Username: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "username")} />
      <br/>
      <label>Password: </label>
      <input type="text" onChange={e => onInputChange(e.target.value, "password")} />

      <button onClick={() => submitForm()}>Register</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userReduer: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register : (user) => dispatch(ACTIONS.register(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
