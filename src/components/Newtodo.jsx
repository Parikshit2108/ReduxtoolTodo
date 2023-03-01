import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { todoActions } from "../reducers/todoSlice";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Editmodal from "./Editmodal";
// import Deletemodal from "./Deletemodal";
// import { padding } from "@mui/system";

export default function Newtodo() {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.todo.temp);
  const open = useSelector((state) => {
    console.log(state);
    return state.todo.editmodal;
  });
  //   console.log(listItem);
  //   let ls = JSON.parse(localStorage.getItem("todoList"));

  const [value, setValue] = useState();
  const [editValue, setEditValue] = useState({
    index: "",
    value: "",
  });

  const setData = (list, index) => {
    setEditValue({ index: index, value: list });
  };

  const addTodoList = () => {
    dispatch(todoActions.addTodo(value));
  };
  const modalState = () => {
    dispatch(todoActions.modalOpenHandler());
  };

  return (
    <div>
      <Paper
        elevation={6}
        sx={{
          marginLeft: "300px",
          marginRight: "100px",
          //   background: "transparent",
          opacity: "0.9",
          //   marginTop: "50px",
          width: "60%",
          //   height: "70vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{ paddingBottom: "40px", paddingTop: "20px" }}
        >
          Todo List
        </Typography>
        <TextField
          required
          sx={{ width: "60%" }}
          id="outlined-required"
          label="type here"
          placeholder="Enter your todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            marginLeft: "100px",
            height: "50px",
            color: "white",
            backgroundColor: "green",
          }}
          onClick={addTodoList}
        >
          + Add todo
        </Button>
        <Table sx={{ marginTop: "10px" }}>
          <TableHead sx={{ bgcolor: "orange", marginTop: "20px" }}>
            <TableRow>
              <TableCell>Sr.No</TableCell>
              <TableCell>Todo List</TableCell>
              <TableCell>Update Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "lightskyblue", marginTop: "20px" }}>
            {listItem.map((list, index) => (
              <TableRow sx={{ width: "100%" }} key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{list}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      marginLeft: "50px",
                      backgroundColor: "#f2d115",
                      color: "black",
                    }}
                    variant="contained"
                    onClick={() => {
                      modalState();
                      setData(list, index);
                    }}
                  >
                    Edit{" "}
                  </Button>{" "}
                  <Button
                    sx={{ marginLeft: "50px", backgroundColor: "red" }}
                    variant="contained"
                    onClick={() => {
                      let event = window.confirm(
                        "are you sure you want to delete"
                      );
                      if (event === true) {
                        dispatch(todoActions.deleteTodo(index));
                      }
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {open && (
          <Editmodal
            open={open}
            value={editValue.value}
            index={editValue.index}
          />
        )}
      </Paper>
    </div>
  );
}
