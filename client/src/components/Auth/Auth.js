import React from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionGenerators";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";
const Auth = props => {
    if(props.userReducer.authenticated)
        return (
            <div>
                <p>Logged in as {props.userReducer.username}</p>
                <Logout logout={() => logout()}/>
            </div>
        )
    else return(
        <div>
            <Login login={(user) => props.login(user)}/>
            <Register register={(user) => props.register(user)}/>
        </div>
    )
  return (
      <div>

      </div>
  );
};

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(ACTIONS.register(user)),
    login: user => dispatch(ACTIONS.login(user)),
    logout: () => dispatch(ACTIONS.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

