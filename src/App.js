import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn";
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "./queries";
import Menu from "./components/Menu";

function App() {
  const { loading: currentUserLoading, data: currentUserData } = useQuery(
    CURRENT_USER
  );

  return currentUserLoading ? null : (
    <div>
      <Menu />
      {currentUserData.currentUser ? <LoggedIn /> : <Home />}

      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
