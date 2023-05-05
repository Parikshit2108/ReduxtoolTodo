import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../reducers/todoSlice";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Deletemodal() {
  //   const [newValue, setNewValue] = React.useState(value);
  const open = useSelector((state) => state.todo.editmodal);
  console.log(open);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(todoActions.modalCloseHandler());
  };
  const updateState = () => {
    // dispatch(todoActions.editTodo({ newValue, index }));
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit Your Todo List
            </Typography>
            <TextField
              id="transition-modal-description"
              fullWidth
              sx={{ mt: 2 }}
              onChange={(e) => {}}
            />
            <br />
            <Button
              sx={{ mt: 2, bgcolor: "yellowgreen" }}
              variant="contained"
              onClick={() => {
                let event = window.confirm(
                  "are your shure you want to update info "
                );
                if (event === true) {
                  updateState();
                  handleClose();
                } else {
                  handleClose();
                }
              }}
            >
              Update
            </Button>
            <Button
              sx={{ mt: 2, marginLeft: "200px", bgcolor: "rosybrown" }}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
