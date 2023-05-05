import React from "react";
import Select from "./Select";
import { state } from "../employee/Data";

export default function Test() {
  return (
    <div>
      <Select options={state} label={"states"} multiselect={true}></Select>
    </div>
  );
}
