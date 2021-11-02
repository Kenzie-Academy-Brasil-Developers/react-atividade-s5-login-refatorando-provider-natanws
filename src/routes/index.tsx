import { Switch, Route } from "react-router";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};
