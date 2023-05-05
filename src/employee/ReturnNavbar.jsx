import React from "react";
import EmpModal from "./EmpModal";
import Navbar from "./Navbar";

export default function ReturnNavbar() {
  return (
    <div>
      <Navbar>
        <EmpModal
          msg="Your request will be approved in sometime, Please wait"
          btnHeading="Return"
          url="/EmpSidebar"
        ></EmpModal>
      </Navbar>
    </div>
  );
}
