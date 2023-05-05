import React from "react";
import useTable from "./useTable";

export default function Table() {
  const headCell = [
    { id: "userId", lable: "ID" },
    { id: "name", lable: "Patient Name" },
    { id: "Date", lable: "Appointment Date" },
    { id: "docName", lable: "DocName" },
    { id: "slot", lable: "Booked lSlot" },
    { id: "test", lable: "Test" },
  ];
  const data = "data";
  const { TableHeader } = useTable(data, headCell);
  return <TableHeader></TableHeader>;
}
