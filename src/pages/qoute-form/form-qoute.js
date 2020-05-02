import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import QouteForm from "./qoute-form";
import "./form-qoute.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: "absolute",
    // width: "40%",
    // margin: "0 auto",
    // backgroundColor: theme.palette.background.paper,
    // border: " none",
    // borderRadius: "10px",
    // // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={modalStyle}
      id="modal-body-qoute__form"
      className={classes.paper}
    >
      <h2 id="simple-modal-title">Get a Qoute Form</h2>
      <QouteForm />
    </div>
  );

  return (
    <div>
      <button
        className="modal-btn"
        title="Get a qoute"
        type="button"
        onClick={handleOpen}
      >
        Get a qoute
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
