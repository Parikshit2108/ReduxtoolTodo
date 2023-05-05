import { TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "./Modal";

export default function MainModal() {
  const [status, setStatus] = useState(false);
  const input = ["name", "email", "password"];
  return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          {input.map((element, index) => {
            return <TextField placeholder={element}></TextField>;
          })}
          {/* {" "}
          <p>The content of the modal</p> */}
        </Modal>
      )}
      <div className="container">
        <h2>This is the page content</h2>
        <button onClick={() => setStatus(true)}>Open Modal</button>
      </div>
    </div>
  );
}
