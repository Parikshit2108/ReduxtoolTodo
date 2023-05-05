import React from "react";
import Accordian from "./Accordian";
import { educationDetails, state, universityName, educationType } from "./Data";
export default function Educationdetails() {
  return (
    <div>
      <Accordian
        inputs={educationDetails}
        universityName={universityName}
        educationType={educationType}
        selectList={state}
        heading={"Education Type"}
      ></Accordian>
    </div>
  );
}
