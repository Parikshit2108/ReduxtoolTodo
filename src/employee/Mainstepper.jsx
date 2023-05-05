import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Addressinfo from "./AddressInfo";
import BankDetails from "./BankDetails";
import Contacts from "./Contact";
import Educationdetails from "./Educationdetails";
import Experience from "./Experience";
import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import Technicalskill from "./Technicalskill";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer/Drawer";
// import { Container } from "@mui/system";
// import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton/IconButton";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({}));

export const steps = [
  "Primary Info",
  "Secondary Info",
  "Education Details",
  "Address Details",
  "Bank Details",
  "Technical Skills",
  "Experience",
  "Contact",
];
const drawerWidth = 240;
export default function Mainstepper(props) {
  const [activeStep, setActiveSteps] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { win } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const nextStep = () => {
    if (activeStep < 7) setActiveSteps(activeStep + 1);
    else {
      navigate("/ReturnNavbar");
    }
  };
  console.log(activeStep);
  const prevStep = () => {
    setActiveSteps(activeStep - 1);
  };
  const handleDrawerToggle = () => {
    setToggle(!toggle);
  };
  const stepper = (
    <Grid item xs={12} sm={12} sx={{ display: { xs: "none", md: "block" } }}>
      <Stepper
        connector={false}
        activeStep={activeStep}
        sx={{ justifyContent: "space-between" }}
      >
        {steps.map((steps, index) => (
          <Step key={index} justifyContent="center">
            <StepLabel
              StepIconComponent={"none"}
              sx={{ ml: "25px" }}
              className={activeStep === index ? "active" : ""}
            >
              {steps}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
  const container = win !== undefined ? () => win().document.body : undefined;

  const icon = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  );
  return (
    <div>
      <Box
        sx={{
          m: { md: "25px 50px", sm: "10px 8px" },
          p: "10px 10px",
          width: "auto",
          height: "auto",
        }}
      >
        {matches ? icon : stepper}

        <Grid container>
          <Drawer
            container={container}
            variant="temporary"
            open={toggle}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          ></Drawer>
          <Grid item xs={6} sm={12}>
            <Box
              // component={Paper}
              margin="1em 1em"
              position={"relative"}
              //   top="-100px"
            >
              <Box
                sx={{
                  position: {
                    md: "fixed",
                    sm: "relative",
                    justifyContent: "space-around",
                    ml: { sm: "2em" },
                  },
                }}
                width={"100%"}
              >
                {activeStep === 0 ? <PrimaryInfo /> : ""}
                {activeStep === 1 ? <SecondaryInfo /> : ""}
                {activeStep === 2 ? <Educationdetails /> : ""}
                {activeStep === 3 ? <Addressinfo /> : ""}
                {activeStep === 4 ? <BankDetails /> : ""}
                {activeStep === 5 ? <Technicalskill /> : ""}
                {activeStep === 6 ? <Experience /> : ""}
                {activeStep === 7 ? <Contacts /> : ""}
              </Box>

              <Box
                component={Paper}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  p: "1em 1em",
                  mt: { md: "35em", sm: "2em" },
                  mb: { sm: "1em" },
                  ml: { sm: "50px", md: "40px" },
                  position: { md: "fixed", sm: "fixed" },
                  width: { md: "85%", sm: "100%" },
                }}
              >
                <Grid
                  container
                  display={"flex"}
                  flexWrap="wrap"
                  textAlign="center"
                  justifyContent={"center"}
                  spacing={2}
                  columnGap={2}
                >
                  <Grid item md={5} sm={4} xs={5}>
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      sx={{
                        backgroundColor: "#086288",
                        color: "#fff",
                        borderColor: "#075575",
                      }}
                      onClick={prevStep}
                    >
                      Previous
                    </Button>
                  </Grid>
                  <Grid item md={5} sm={4} xs={5}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#086288",
                        color: "#fff",
                        borderColor: "#075575",
                      }}
                      onClick={() => {
                        nextStep();
                        // activeStep === 8 && navigate("/Navbar");
                      }}
                    >
                      {activeStep === 7 ? "Submit" : "Next"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
