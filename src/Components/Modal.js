import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProfilePage from '../ProfilePage';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/counter/userSlice";
import "./Modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
  },
}));

export default function ProfileModal() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className="nav-profile-button">
      <AccountCircleIcon />
            <div className="nav-user-info">
              <p>Welcome</p>
              <p>{user.email}</p>
            </div>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="nav-modal-button">
            <ProfilePage />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}