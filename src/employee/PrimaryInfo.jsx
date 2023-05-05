import React, { useState } from "react";
import Inputfields from "./Inputfields";
import {
  primaryInfo,
  gender,
  designation,
  nationality,
  empstatus,
} from "./Data";

export default function PrimaryInfo() {
  const [primarydata, setPrimaryData] = useState({
    empId: "",
    empName: "",
    doj: "",
    dob: "",
    email: "",
    bloodGroup: "",
    designation: "",
    gender: "",
    nationality: "",
    empStatus: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrimaryData({ ...primarydata, [name]: value });
    console.log(primarydata);
  };

  return (
    <div>
      <Inputfields
        inputs={primaryInfo}
        selectList={gender}
        designation={designation}
        nationality={nationality}
        empstatus={empstatus}
        handleChange={handleChange}
      ></Inputfields>
    </div>
  );
}
