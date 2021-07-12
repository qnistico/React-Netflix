import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginPage from "./LoginPage";

function App() {
  const user = null;
  const history = useHistory();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
        <Switch>
          
          <Route exact path="/">
            <LandingPage />
          </Route>
          
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
