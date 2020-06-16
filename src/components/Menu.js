import React from "react";
import { Link } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { CURRENT_USER } from "../queries";
import Logout from "./Logout"

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };

  const client = useApolloClient();
  const { currentUser } = client.readQuery({ query: CURRENT_USER });

  return (
    <div>
      <Link style={padding} to="/">
        Home
      </Link>
      {currentUser ? (
        <span>Welcome {currentUser.name}
        <Logout/>
        </span>
      ) : (
        <span>
          <Link style={padding} to="/signup">
            Sign Up
          </Link>
          <Link style={padding} to="/login">
            Login
          </Link>
        </span>
      )}
    </div>
  );
};

export default Menu;
