import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignInPage.css";

function SignInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signin-page">
      <div className="signin-page-body">
        <form>
          <h1>Sign In</h1>
          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />
          <button onClick={signIn} type="submit">
            Sign In
          </button>
          <h4>
            <span className="gray">New to MovieFlix?</span>{" "}
            <span onClick={register} className="signup-link">
              Sign up here.
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
