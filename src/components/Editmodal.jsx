import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../reducers/todoSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Editmodal({ open, index, value }) {
  console.log(open);
  const [newValue, setNewValue] = React.useState(value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(todoActions.modalCloseHandler());
  };
  const updateState = () => {
    dispatch(todoActions.editTodo({ newValue, index }));
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
              value={newValue}
              fullWidth
              sx={{ mt: 2 }}
              onChange={(e) => {
                setNewValue(e.target.value);
              }}
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
