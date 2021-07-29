import React, { useState } from "react";
import "./LoginPage.css";
import SignInPage from "./SignInPage";
import { useHistory } from "react-router-dom";
import contentimg1 from "./img/content1img.png";
import mockup from "./img/mockup.png";
import Footer from "./Footer";
import logo from "./img/logo.png";
function LoginPage() {
  const history = useHistory();
    const [signIn, setSignIn] = useState(false);
  return (
    <div>
    <div className="login-page">
      <div className="login-page-bg">
        <img
          src={logo}
          alt=""
          className="login-page-logo"
        />
        <button onClick={() => setSignIn(true)} className="login-button" >Sign In</button>
        <div className="login-page-gradient"></div>
      </div>
      <div className="login-page-body-flex">
      {signIn ? (
                <SignInPage />
            ): (
        <div className="login-page-body">
            
          <h1>Watch your favorite movies or shows at your convenience!</h1>
          <h2>Watch from anywhere.  Cancel any time.</h2>
          <h3>Ready to get started? Click the 'Get Started' button to begin.</h3>

            <form>
              {/*
              <input type="email" placeholder="Email" />
              */}
              <button onClick={() => setSignIn(true)}>Get Started</button>
            </form>
        </div>
            )}
            
      </div>
            
    </div>
    <div className="preview-content">
    <div className="preview-content-item">
      <div className="preview-content-flex">
      <div>
      <h2>Watch on any platform!</h2>
      <p>We support all media platforms.  Watch on TVs, Playstation, Xbox, Mobile Phones and more.</p>
      </div>
      <div>
        <img src={mockup} alt="" />
      </div>
      </div>

  </div>
    <div className="preview-content-item">
      <div className="preview-content-flex-reverse">
      <div>
      <h2>Watch on any platform!</h2>
      <p>We support all media platforms.  Watch on TVs, Playstation, Xbox, Mobile Phones and more.</p>
      </div>
      <div>
        <img src={contentimg1} alt="" />
      </div>
      </div>

  </div>
    
    <div className="preview-content-item">
      <div className="preview-content-flex">
      <div>
      <h2>Watch on any platform!</h2>
      <p>We support all media platforms.  Watch on TVs, Playstation, Xbox, Mobile Phones and more.</p>
      </div>
      <div>
        <img src={contentimg1} alt="" />
      </div>
      </div>

  </div>
    <div className="preview-content-item">
      <div className="preview-content-flex-reverse">
      <div>
      <h2>Watch on any platform!</h2>
      <p>We support all media platforms.  Watch on TVs, Playstation, Xbox, Mobile Phones and more.</p>
      </div>
      <div>
        <img src={contentimg1} alt="" />
      </div>
      </div>

  </div>
</div>
<Footer />
</div>
  );
}

export default LoginPage;
