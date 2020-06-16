import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../mutations";
import useField from "../hooks/useField";
import { useHistory } from "react-router-dom";
import { CURRENT_USER } from "../queries";
import { useApolloClient } from "@apollo/client";

const Login = () => {
  const history = useHistory();
  const [login, { data: loginData }] = useMutation(LOGIN, {
    onError: (error) => {
      if (error) {
        // TODO: Notify user of failed login
        // console.error("Login mutation error:", error);
      }
    },
  });
  const { reset: resetEmail, ...emailInput } = useField("text");
  const { reset: resetPassword, ...passwordInput } = useField("password");
  const client = useApolloClient();

  useEffect(() => {
    if (loginData) {
      const { token, currentUser } = loginData.login;
      localStorage.setItem("expertize-user-token", token);
      client.writeQuery({
        query: CURRENT_USER,
        data: { currentUser },
      });
      resetEmail();
      resetPassword();
      history.push("/");
    }
  }, [loginData]); // eslint-disable-line

  const handleSignup = (event) => {
    event.preventDefault();
    login({
      variables: {
        email: emailInput.value,
        password: passwordInput.value,
      },
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSignup}>
        <div>
          email:
          <input {...emailInput} />
        </div>
        <div>
          password:
          <input {...passwordInput} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
