import React from "react";
import { useApolloClient } from "@apollo/client";
import { Link } from "react-router-dom";

const Logout = () => {
  const client = useApolloClient();
  const logout = () => {
    localStorage.clear();
    client.resetStore();
  };

  return (
    <Link to="/" onClick={logout}>
      Logout
    </Link>
  );
};

export default Logout;
