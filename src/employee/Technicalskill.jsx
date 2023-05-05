import React from "react";
import Accordian from "./Accordian";
import { technicalSkill, experience } from "./Data";

export default function Technicalskill() {
  return (
    <div>
      <Accordian
        inputs={technicalSkill}
        selectList={experience}
        heading={"Technical Skill"}
      ></Accordian>
    </div>
  );
}
