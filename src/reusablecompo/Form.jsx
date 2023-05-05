import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../reducers/dataSlice";
import { modalActions } from "../reducers/modalSlice";
import BasicModal from "./FormModal";

export default function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    batchName: "",
    mentorName: "",
    technologie: [],
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const openModal = useSelector((state) => state.modal.batchlistModal);

  // const [status, setStatus] = useState(openModal);

  const addData = () => {
    dispatch(dataActions.addBatchListData(input));
  };
  const closeBatchlistModal = () => {
    dispatch(modalActions.modalCloseHandler());
  };

  const batchlistData = useSelector((state) => state.data.temp);
  console.log(batchlistData);

  const inputs = [
    {
      lable: "Batch Name",
      type: "text",
      placeholder: "enter your data",
      name: "batchName",
    },
    {
      lable: "Mentor Name",
      type: "text",
      placeholder: "enter your data",
      name: "mentorName",
    },
    {
      lable: "Technologies",
      type: "select",
      placeholder: "enter your data",
      name: "Python",
    },
    {
      lable: "Start date",
      type: "Date",
      placeholder: "enter your data",
      name: "startDate",
    },
    {
      lable: "End Date",
      type: "Date",
      placeholder: "enter your data",
      name: "endDate",
    },
  ];
  const Technologies = [
    "JAVA",
    "Python",
    "React-js",
    "JavaScript",
    "Mongo DB",
    "NodeJs",
  ];
  return (
    <div>
      {openModal && (
        <BasicModal
          modalTitle="Add new batch"
          open={openModal}
          // setStatus={setStatus}
          inputs={inputs}
          techno={Technologies}
          handleChange={handleChange}
          sendData={addData}
          onClose={closeBatchlistModal}
          btnTitle="Create"
        ></BasicModal>
      )}
    </div>
  );
}
