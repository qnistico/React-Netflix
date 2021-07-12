import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignInPage.css";

function SignInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signupEmailRef = useRef(null);
  const signupPasswordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        signupEmailRef.current.value,
        signupPasswordRef.current.value
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
          <h1>Sign <span className="color">In</span></h1>
          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />
          <button onClick={signIn} type="submit">
            Sign In
          </button>
          
        </form>
        
      </div>
      <div className="signin-page-body">
      <form>
          <h2>Sign <span className="color">Up</span></h2>
          <input type="email" ref={signupEmailRef} placeholder="Email" />
          <input type="password" ref={signupPasswordRef} placeholder="Password" />
          <button onClick={register} type="submit" className="signup-link">
            Sign Up
          </button>
        </form>
        </div>
    </div>
  );
}

export default SignInPage;
