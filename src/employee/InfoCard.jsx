import {
  Card,
  CardContent,
  Divider,
  Fade,
  Grid,
  Popper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React, { useState } from "react";
import {
  primaryInfo,
  secondaryInfo,
  educationDetails,
  addressDetails,
  bankDetails,
  technicalSkill,
  experiencData,
  Contact,
} from "./Data";
import { steps } from "./Mainstepper";

export default function InfoCard() {
  const info = [
    primaryInfo,
    secondaryInfo,
    educationDetails,
    addressDetails,
    bankDetails,
    technicalSkill,
    experiencData,
    Contact,
  ];
  const [showMessage, setShowMessage] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (e) => {
    setShowMessage(true);
    setAnchorEl(e.currentTarget);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };
  const canBeOpen = showMessage && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>
      <Card
        sx={{
          p: "1em",
          border: "1px solid #E9EEF7",
          shadows: "0 0 1em #F6F7F9",
          width: "90vw",
          Height: "auto",
        }}
      >
        {/* ===================================editicon========================================== */}
        <div
          style={{ width: "50px", marginLeft: "94em" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ModeEditOutlineOutlinedIcon id="editIcon" />
        </div>
        {/*====================================popper==========================================  */}
        <Popper id={id} open={showMessage} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                Edit
              </Box>
            </Fade>
          )}
        </Popper>
        {/* ===================================info maping================================ */}
        {info.map((result, i) => (
          <CardContent key={i}>
            <Box>
              <Typography variant="h5">{steps[i]}</Typography>
              <Grid container display="flex" spacing={2} flexDirection="row">
                {result.map((object, index) => (
                  <Grid
                    item
                    key={index}
                    sm={4}
                    md={3}
                    lg={3}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      mt: "1em",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#616161" }}>
                      {object.label}: --
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider
              sx={{ mt: "1em", borderStyle: "dashed", color: "#616161" }}
            />
          </CardContent>
        ))}
      </Card>
    </>
  );
}
