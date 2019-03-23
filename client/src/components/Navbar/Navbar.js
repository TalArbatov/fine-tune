import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/Register">
        <p>Register</p>
      </Link>
    </div>
  );
};

export default Navbar;
