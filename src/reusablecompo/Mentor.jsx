import React from "react";
import NewForm from "./NewForm";
import Tableuse from "./Usetable";

export default function Mentor() {
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
      field: "email",
      header: "E-mail ID",
    },
    {
      field: "MenotorName",
      header: "Menotor Name",
    },
    {
      field: "skill",
      header: "Skills",
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
      email: "abcd@ty.com",
      MenotorName: "Megha",
      action: "action",
      skill: "Front-end",
    },
  ];
  const title = "Mentors list";
  const btn = "+ New Mentors";
  return (
    <div>
      <Tableuse column={column} row={row} title={title} btn={btn}>
        <NewForm></NewForm>
      </Tableuse>
    </div>
  );
}
