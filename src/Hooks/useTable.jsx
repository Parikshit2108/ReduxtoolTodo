import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

function useTable(data, headCell) {
  const TableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {headCell?.map((element, index) => (
            <TableCell key={`cell${index}`}>{element.lable}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return { TableHeader };
}

export default useTable;
