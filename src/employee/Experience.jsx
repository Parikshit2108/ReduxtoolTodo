import React from "react";
import Accordian from "./Accordian";
import { experiencData, designation } from "./Data";

export default function Experience() {
  return (
    <div>
      <Accordian
        inputs={experiencData}
        selectList={designation}
        heading="Experience"
      ></Accordian>
    </div>
  );
}
