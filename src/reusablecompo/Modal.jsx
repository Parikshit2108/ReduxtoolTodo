import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";

const Modal = (props) => {
  const { closeModal } = props;
  const closeicon = () => (
    <CloseIcon
      name="times"
      onClick={closeModal}
      style={{
        color: "red",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: 0,
        position: "absolute",
        top: "0.3rem",
        right: "0.5rem",
        size: "large",
      }}
    />
  );
  return (
    <div className="overlay">
      <div className="content">
        {closeicon()}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
