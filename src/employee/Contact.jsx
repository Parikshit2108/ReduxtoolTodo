import React from "react";
import Accordian from "./Accordian";
import { Contact, contactType } from "./Data";

export default function Contacts() {
  return (
    <>
      <Accordian inputs={Contact} selectList={contactType}></Accordian>
    </>
  );
}
