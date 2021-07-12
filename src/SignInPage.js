import React from "react";
import "./SignInPage.css";
  


function SignInPage() {
  const register = (e) => {
    e.preventDefault();
  };
  
  const signIn = (e) => {
    e.preventDefault();
  }
  return (
    <div className="signin-page">
        <div className="signin-page-body">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">Sign In</button>
        <h4><span className="gray">New to MovieFlix?</span>  <span onClick={register} className="signup-link">Sign up here.</span></h4>
      </form>
      </div>
    </div>
  );
}

export default SignInPage;
