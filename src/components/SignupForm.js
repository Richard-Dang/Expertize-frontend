import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../mutations";
import useField from "../hooks/useField";
import useAuthData from "../hooks/useAuthData";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [signup, { data: signupData }] = useMutation(SIGNUP, {
    onError: (error) => {
      if (error) {
        // TODO: Notify user of failed signup
        // console.error("Signup mutation error:", error);
      }
    },
  });
  const { reset: resetUsername, ...usernameInput } = useField("text");
  const { reset: resetPassword, ...passwordInput } = useField("password");
  const { reset: resetEmail, ...emailInput } = useField("text");
  const { reset: resetName, ...nameInput } = useField("text");
  const authData = useAuthData(signupData);
  const history = useHistory();

  useEffect(() => {
    if (authData) {
      history.push("/");
      resetUsername();
      resetPassword();
      resetEmail();
      resetName();
    }
  }, [authData]); // eslint-disable-line

  const handleSignup = (event) => {
    event.preventDefault();
    signup({
      variables: {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        name: nameInput.value,
      },
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          username:
          <input {...usernameInput} />
        </div>
        <div>
          email:
          <input {...emailInput} />
        </div>
        <div>
          name:
          <input {...nameInput} />
        </div>
        <div>
          password:
          <input {...passwordInput} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
