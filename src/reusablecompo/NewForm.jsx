import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../reducers/dataSlice";
import { modalActions } from "../reducers/modalSlice";
import BasicModal from "./FormModal";

export default function NewForm() {
  const dispatch = useDispatch();
  const mentorModal = useSelector((state) => state.modal.mentorlistModal);
  const [status, setStatus] = useState(mentorModal);
  const [mentorInput, setMentorInput] = useState({
    mentorName: "",
    empId: "",
    email: "",
    skills: [],
  });
  const mentorModalhandleChange = (e) => {
    const { name, value } = e.target;
    setMentorInput({ ...mentorInput, [name]: value });
    console.log(mentorInput);
  };

  const addMentorData = () => {
    dispatch(dataActions.addMentorListData(mentorInput));
  };
  const closeMentorlistModal = () => {
    dispatch(modalActions.menotrModalCloseHandler());
  };
  const inputs = [
    {
      lable: "Mentor Name",
      type: "text",
      placeholder: "enter your data",
      name: "mentorName",
    },
    {
      lable: "Employee ID",
      type: "number",
      placeholder: "enter your data",
      name: "empId",
    },
    {
      lable: "E-mail ID",
      type: "email",
      placeholder: "enter your data",
      name: "email",
    },
    {
      lable: "Skills",
      type: "select",
      placeholder: "enter your data",
      name: "skills",
    },
  ];
  const skills = ["Material ui", "Bootstrap", "AntDesign"]; 

  

  const mentorlistData = useSelector((state) => state.data.mentorData);
  console.log(mentorlistData);

  return (
    <div>
      <Button
        onClick={() => {
          setStatus(true);
        }}
      >
        Click Me
      </Button>
      {status && (
        <BasicModal
          modalTitle="Add new mentor"
          open={status}
          setStatus={setStatus}
          inputs={inputs}
          techno={skills}
          handleChange={mentorModalhandleChange}
          sendData={addMentorData}
          onClose={closeMentorlistModal}
          btnTitle="create"
        ></BasicModal>
      )}
    </div>
  );
}
