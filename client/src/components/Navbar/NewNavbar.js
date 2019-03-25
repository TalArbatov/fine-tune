import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from '../Auth/Logout'

const Navbar = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  background: #222222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
  div {
  }
`;

const MenuList = styled.div`
  display: inline-block;
  p {
    display: inline-block;
  }
`;

const NewNavbar = props => {
  return (
    <Navbar>
      <div>
        <p>Fine Tune</p>
      </div>

      {!props.userReducer.authenticated ? (
        <MenuList>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/register">
            <p>Register</p>
          </Link>
        </MenuList>
      ) : (
        <MenuList>
            <Logout />
        </MenuList>
      )}
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNavbar);
