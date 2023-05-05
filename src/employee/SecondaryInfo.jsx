import React from "react";
import Inputfields from "./Inputfields";
import { secondaryInfo, maritalStatus } from "./Data";

export default function SecondaryInfo() {
  return (
    <div>
      <Inputfields
        inputs={secondaryInfo}
        selectList={maritalStatus}
      ></Inputfields>
    </div>
  );
}
