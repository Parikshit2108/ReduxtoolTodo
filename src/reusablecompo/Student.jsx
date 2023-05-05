import React from "react";
import Rejectionmodal from "./Rejectionmodal";
import Tableuse from "./Usetable";
import Approvemodal from "./Approvemodal";

export default function Student() {
  const column = [
    {
      field: "select",
      header: "Select",
    },
    {
      field: "no",
      header: "NO",
    },
    {
      field: "empid",
      header: " Employee ID",
    },
    {
      field: "empName",
      header: " Employee Name",
    },
    {
      field: "yop",
      header: "YOP",
    },
    {
      field: "percentage",
      header: "Percentage",
    },
    {
      field: "experience",
      header: "Experience",
    },
    {
      field: "contact",
      header: "Contact No",
    },
    {
      field: "action",
      header: "Action",
    },
  ];
  const row = [
    {
      select: "select",
      no: "12345",
      empid: "suitup2",
      empName: "Parikshit",
      yop: "2016",
      action: "action",
      contact: "911",
      percentage: "85%",
      experience: "Fresher",
    },
  ];
  const title = "Request list";
  const btn = "+ New Student";

  return (
    <div>
      <Tableuse
        column={column}
        row={row}
        title={title}
        btn={btn}
        actionBtn1="Approve"
        actionBtn2="Reject"
        Approvemodal={<Approvemodal />}
        Rejectionmodal={<Rejectionmodal />}
      >
        <Rejectionmodal />
        {/* <Approvemodal /> */}
      </Tableuse>
    </div>
  );
}
