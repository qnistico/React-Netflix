import React from "react";
import ProfilePage from "../ProfilePage";
import "./Modal.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <ProfilePage />
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
           <ExitToAppIcon /> Back to MovieFlix
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;