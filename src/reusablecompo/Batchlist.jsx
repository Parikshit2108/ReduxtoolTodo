import React from "react";
import Form from "./Form";
import Tableuse from "./Usetable";

export default function ReusebleTable() {
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
      field: "batchid",
      header: " Batch ID",
    },
    {
      field: "batchname",
      header: "Batch Name",
    },
    {
      field: "MenotorName",
      header: "Menotor Name",
    },
    {
      field: "technologies",
      header: "Technologies",
    },
    {
      field: "startdate",
      header: "Start Date",
    },
    {
      field: "enddate",
      header: "End Date",
    },
    {
      field: "status",
      header: "Status",
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
      batchid: "suitup2",
      batchname: "abcd",
      MenotorName: "Megha",
      startdate: "07/03/2023",
      enddate: "08/03/2023",
      status: "inprogress",
      action: "action",
      technologies: "Front-end",
    },
  ];
  const title = "Batch list";
  const btn = "+ New Batch";
  return (
    <div>
      <Tableuse column={column} row={row} title={title} btn={btn}>
        <Form></Form>
      </Tableuse>
    </div>
  );
}
