import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
// import { modalActions } from "../reducers/modalSlice";
// import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    // width: { lg: "400px", md: "500px", sm: "300px" },
    height: "auto",
    border: "1px solid #DCDCDC;",
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 8px #0000003D",
    borderRadius: "16px",
    opacity: 1,
    // marginTop: "15%",
  },
  root1: {
    color: "#086288",
    display: "flex",
    justifyContent: "space-between",
    // width: "80%",
    margin: "24px 16px",
  },
  root2: {},
  btn: {
    width: "79px",
    height: "42px",
    backgroundColor: "#086288 0% 0% no-repeat padding-box",
    border: "1px solid #075575",
    borderRadius: "7px",
    opacity: 1,
    // marginTop: "500px",

    color: "white",
  },
});

export default function BasicModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal open={props.open} onClose={props.onClose}>
        <Box
          component={Paper}
          className={classes.root}
          sx={{
            width: { md: "642px", sm: "600px", xs: "300" },
            marginLeft: { lg: "30%", sm: "10%" },
          }}
        >
          <Box className={classes.root1}>
            <Typography
              sx={{
                width: "129px",
                height: "24px",
                font: "normal normal 600 18px/24px Open Sans",
              }}
            >
              {props.modalTitle}
            </Typography>
            <Typography onClick={props.onClose}>
              <CloseIcon
                sx={{
                  width: "13px",
                  height: "15px",
                  opacity: 1,
                }}
              />
            </Typography>
          </Box>
          <Divider sx={{ marginBottom: "25px" }} />
          <Box>
            <Grid
              container
              display="flex"
              justifyContent="center"
              rowSpacing={3}
            >
              {props.inputs.map((element, index) => {
                return (
                  <>
                    <Grid
                      item
                      key={index.toString()}
                      display={"flex"}
                      flexDirection="column"
                      xs={8}
                      justifyContent="center"
                    >
                      <label style={{ marginBottom: "5px" }}>
                        {element.lable}
                      </label>
                      {element.type === "select" ? (
                        <Select
                          sx={{ height: "48px", border: "0.5px solid #707070" }}
                          name={element.name}
                          value={props.inputs.skill}
                          onChange={props.handleChange}
                          key={index}
                        >
                          {props.techno
                            ? props.techno.map((element, ind) => (
                                <MenuItem key={ind.toString()} value={element}>
                                  {element}
                                </MenuItem>
                              ))
                            : ""}
                        </Select>
                      ) : (
                        <TextField
                          sx={{
                            height: "45px" /*border: "0.5px solid #707070" */,
                          }}
                          type={element.type}
                          name={element.name}
                          onChange={props.handleChange}
                          placeholder={element.placeholder}
                        />
                      )}
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Divider
              sx={{
                marginTop: "35px",
              }}
            />
            <Button
              sx={{
                backgroundColor: "#086288",
                marginLeft: { md: "550PX", sm: "260.5px", xs: "110.5" },
                marginTop: "15px",
                marginBottom: "20px",
              }}
              variant="contained"
              className={classes.btn}
              onClick={() => {
                props.sendData();
                props.onClose();
              }}
            >
              {props.btnTitle}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
