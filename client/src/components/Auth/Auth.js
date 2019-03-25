import React, {Suspense} from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionGenerators";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./LazyRegister";

class Auth extends React.Component {
  state = {
    loginErrorMessage: "",
    registerErrMsg: {
      client: "",
      server: ""
    }
  };
  onLoginRequest = user => {
    this.props.login(user).then(errMsg => {
      if (errMsg) this.setState({ ...this.state, loginErrorMessage: errMsg });
    });
  };

  onRegisterRequest = user => {
    let errMsg = "";
    if (user.firstName == "") errMsg = "Please enter first name.";
    else if (user.lastName == "") errMsg = "Please enter last name.";
    else if (user.email == "") errMsg = "Please enter email.";
    else if (user.username == "") errMsg = "Please enter username.";
    else if (user.username.length < 3) errMsg = "Username too short.";
    else if (user.password == "") errMsg = "Please enter password.";
    else if (user.password.length < 4) errMsg = "Password too short.";
    else if (user.password != user.confirmPassword)
      errMsg = "Passwords don't match";
    else {
      this.props.register(user).then(errMsg => {
        if (errMsg)
          this.setState({
            ...this.state,
            registerErrMsg: { ...this.state.registerErrMsg, server: errMsg }
          });
      });
    }
    this.setState({
      ...this.state,
      registerErrMsg: { ...this.state.registerErrMsg, client: errMsg }
    });
  };

  render() {
    if (this.props.userReducer.authenticated)
      return (
        <div>
          <p>Logged in as {this.props.userReducer.username}</p>
          <Logout logout={() => this.props.logout()} />
        </div>
      );
    else
      return (
        <div>
          {this.props.auth == "login" ? (
            <Login
              login={user => this.onLoginRequest(user)}
              errMsg={this.state.loginErrorMessage}
            />
          ) : (
            <Register
              register={user => this.onRegisterRequest(user)}
              errMsg={this.state.registerErrMsg}
            />
          )}
        </div>
      );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
