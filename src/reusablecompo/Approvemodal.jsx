import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../reducers/dataSlice";
import { modalActions } from "../reducers/modalSlice";
import BasicModal from "./FormModal";

export default function Approvemodal() {
  const approveModal = useSelector((state) => state.modal.approveModal);

  const [input, setInput] = useState({
    batchName: "",
    batchId: "",
  });

  const [open, setOpen] = useState(approveModal);
  const dispatch = useDispatch();

  const approveModalhandleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const closeApproveModal = () => {
    dispatch(modalActions.approveModalClose());
  };
  const sendData = () => {
    dispatch(dataActions.addApprovedData(input));
  };
  const inputs = [
    {
      lable: "Batch Name",
      type: "select",
      placeholder: "",
      name: "batchName",
    },
    {
      lable: "Batch ID",
      type: "select",
      placeholder: "",
      name: "batchId",
    },
  ];
  const data = ["Material ui", "Bootstrap", "AntDesign"];
  return (
    <div>
      <BasicModal
        modalTitle="Change status"
        inputs={inputs}
        open={open}
        setOpen={setOpen}
        handleChange={approveModalhandleChange}
        sendData={sendData}
        techno={data}
        onClose={closeApproveModal}
        btnTitle="Submit"
      ></BasicModal>
    </div>
  );
}
