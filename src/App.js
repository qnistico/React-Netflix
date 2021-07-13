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
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfilePage from "./ProfilePage";
import MovieDetails from "./MovieDetails";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  const history = useHistory();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route exact path="/ProfilePage">
              <ProfilePage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/movies/:name/:vote_average/:vote_count/:overview/:cast/" children={<MovieDetails />}></Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
