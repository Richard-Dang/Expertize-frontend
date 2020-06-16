import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link style={padding} to="/home">
        Home
      </Link>
      <Link style={padding} to="/signup">
        Sign Up
      </Link>
      <Link style={padding} to="/login">
        Login
      </Link>
    </div>
  );
};

export default Menu;
