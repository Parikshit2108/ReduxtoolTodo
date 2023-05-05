import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmpModal(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        open={true}
        //
        sx={{
          marginTop: { md: "15%", sm: "30%", xs: "30%" },
          ml: { md: "25%", sm: "25%", xs: "5%" },
          width: { md: "34em", sm: "20em" },
          height: "10vh",
          p: "1em 1em",
          border: "none",
        }}
      >
        <Box
          component={Paper}
          sx={{ justifyItems: "center", alignContent: "center" }}
        >
          <Typography
            sx={{ p: "1em 1em", color: "#086288", fontSize: { md: "2em" } }}
          >
            {props.msg}
          </Typography>
          <center>
            <Button
              variant="contained"
              sx={{
                mb: { md: "5em", sm: "2.5em", xs: "1.5em" },
                color: "#FFF",
                backgroundColor: "#086288",
              }}
              onClick={() => {
                navigate("/Empsidebar");
              }}
            >
              {props.btnHeading}
            </Button>{" "}
          </center>
        </Box>
      </Modal>
    </div>
  );
}
