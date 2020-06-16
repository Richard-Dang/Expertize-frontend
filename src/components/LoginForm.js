import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../mutations";
import useField from "../hooks/useField";
import { useHistory } from "react-router-dom";
import useAuthData from "../hooks/useAuthData";

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
  const authData = useAuthData(loginData);

  useEffect(() => {
    if (authData) {
      history.push("/");
      resetEmail();
      resetPassword();
    }
  }, [authData]); // eslint-disable-line

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
