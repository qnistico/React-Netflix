import React from "react";
import Navbar from "./Navbar";
import "./ProfilePage.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-page-body">
        <div className="profile-page-info">
          <h1>
            <AccountCircleIcon />
            Your Profile
          </h1>
          <div className="avatar-info-flex">
            <div className="profile-page-details">
              <h2>{user.email}</h2>
              <div className="profile-page-plans">
                <h3>Plans</h3>
                <div className="profile-page-plan">
                  <a href="#!">
                    <p>MovieFlix Standard</p>
                    <span>1080p</span>
                  </a>
                  <button>Subscribe</button>
                </div>
                <div className="profile-page-plan">
                  <a href="#!">
                    <p>MovieFlix Basic</p>
                    <span>480p</span>
                  </a>
                  <button>Subscribe</button>
                </div>
                <div className="profile-page-plan">
                  <a href="#!">
                    <p>MovieFlix Premium</p>
                    <span>4K + HDR</span>
                  </a>
                  <button>Subscribe</button>
                </div>

                <button
                  onClick={() => auth.signOut()}
                  className="sign-out-button"
                >
                  <PersonAddDisabledIcon /> Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
