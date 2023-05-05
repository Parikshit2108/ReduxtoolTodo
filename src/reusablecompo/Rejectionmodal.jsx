import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../reducers/dataSlice";
import { modalActions } from "../reducers/modalSlice";
import BasicModal from "./FormModal";

export default function Rejectionmodal() {
  const rejectModal = useSelector((state) => state.modal.rejectModal);

  const [input, setInput] = useState();

  const [open, setOpen] = useState(rejectModal);
  const dispatch = useDispatch();

  const rejectModalhandleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const closeRejectModal = () => {
    dispatch(modalActions.rejectModalClose());
  };
  const sendData = () => {
    dispatch(dataActions.addRejectReasons(input));
  };
  const inputs = [
    {
      lable: "Reason",
      type: "text",
      placeholder: "enter your data",
      name: "reason",
    },
  ];

  return (
    <div>
      <BasicModal
        modalTitle="Reason for rejection"
        inputs={inputs}
        open={open}
        setOpen={setOpen}
        handleChange={rejectModalhandleChange}
        sendData={sendData}
        onClose={closeRejectModal}
        btnTitle="Submit"
      ></BasicModal>
    </div>
  );
}
