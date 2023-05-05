import { TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Newmodal() {
  const [status, setStatus] = useState(false);
  const input = ["name", "email", "password", "contact"];
  return (
    <div>
      {status && (
        <Modal closeModal={() => setStatus(false)}>
          {input.map((element, index) => {
            return <TextField key={index} placeholder={element}></TextField>;
          })}
        </Modal>
      )}
      <div className="container">
        <h2>This is the page content</h2>
        <button onClick={() => setStatus(true)}>Open Modal</button>
      </div>
    </div>
  );
}
