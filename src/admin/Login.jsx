import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import img1 from "../assets/wepik-2022319-214333/back1.png";
import logo from "../assets/Artboard – 2.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${require("../assets/wepik-2022319-214333@2x.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    // opacity: "0.64",
    position: "absolute",
  },
  main: {
    position: "relative",
    backgroundImage: `url(${require("../assets/wepik-2022319-214333.png")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    margin: "5% auto",
    height: "38em",
    width: "70em",
    border: "2px solid #0000",
    borderRadius: "18px 18px 18px 18px",
  },
  toggleButton: {
    color: "#fff",
    backgroundColor: "#ffff",
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "#FAA81D",
    },
  },
  btn1: {
    color: "#FFFF",
    backgroundColor: "#FAA81D",
  },
});

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("right");

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sx={4} sm={5}>
            <Box
              sx={{
                mt: { sm: "26.5em" },
                ml: "1.5em",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontFamily:
                    " var(--unnamed-font-style-normal) normal medium 80px/96px Agrandir Variable",

                  textShadow: "0 2px  black",
                }}
              >
                Good things on your way!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={5}>
            <Box
              sx={{
                backgroundColor: "#000000",
                width: "24em",
                height: "38em",
                ml: { sm: 9.2, xs: 50 },
                borderRadius: "0px 18px 18px 0px",

                // justifyContent: "center",
              }}
            >
              <center>
                <img src={logo} alt="logo" style={{ marginTop: "3em" }} />{" "}
              </center>
              <Typography
                className="font"
                sx={{
                  color: "#FFAA17",
                  fontSize: "2em",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Login
              </Typography>
              <Grid
                container
                direction={"row"}
                rowGap={1}
                sx={{
                  p: "2em",
                  ml: "1em",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mt: "0.5em",
                  }}
                >
                  <InputLabel
                    style={{
                      position: "relative",
                      color: "#FFFFFF",
                      justifySelf: "start",
                    }}
                  >
                    Empoloyee ID
                  </InputLabel>

                  <TextField
                    size="small"
                    sx={{
                      width: "18em",
                      height: "2.5em",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #C4C4C4",
                      borderRadius: "0.5em",
                    }}
                  ></TextField>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    // display: "flex",
                    // flexWrap: "wrap",
                    // flexDirection: "column",
                    mt: "1em",
                  }}
                >
                  <InputLabel
                    style={{
                      position: "relative",
                      color: "#FFFFFF",
                      justifySelf: "start",
                    }}
                  >
                    Password
                  </InputLabel>

                  <TextField
                    size="small"
                    sx={{
                      width: "18em",
                      height: "2.5em",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #C4C4C4",
                      borderRadius: "0.5em",
                    }}
                  ></TextField>
                </Grid>

                {/* <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    // width: "16em",
                    border: "1px solid #C4C4C4",
                    borderRadius: "0.5em",
                  }}
                > */}
                <Box
                  sx={{
                    width: "18em",
                    border: "1px solid #C4C4C4",
                    borderRadius: "0.5em",
                    backgroundColor: "#FAA81D",
                    p: 0.2,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      color: "white",
                      backgroundColor: "#FAA81D",
                      width: "9em",
                      px: 9,
                      fontFamily:
                        "font: normal normal bold 14px/15px Agrandir Variable;",
                      fontWeight: "600",
                      letterSpacing: "0.7px",
                    }}
                    onClick={() => {
                      navigate("/Mainstepper");
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      color: "White",
                      backgroundColor: "black",
                      width: "9em",
                      px: 8.9,
                      borderRadius: "5px",
                      fontFamily:
                        "font: normal normal bold 14px/15px Agrandir Variable;",
                      fontWeight: "600",
                      letterSpacing: "0.7px",
                    }}
                  >
                    Cancel
                  </Button>
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily:
                      "var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-open-sans)",
                  }}
                >
                  Already have and account?
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontFamily:
                        "var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-open-sans)",
                    }}
                  >
                    REGISTER
                  </Link>
                </Typography>
                <Grid item xs={12} sm={12} alignSelf="center">
                  <Button sx={{ color: "#fff" }}> Change Password</Button>
                </Grid>

                <Divider display="block" sx={{ color: "red" }} />
                <Box display={"flex"} flexWrap={"wrap"}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily:
                        " var(--unnamed-font-style-normal) normal normal  Larsseit;",
                    }}
                  >
                    Copyright © 2018 Aleercio.com
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      font: "1px",
                      fontFamily:
                        " var(--unnamed-font-style-normal) normal normal  Larsseit;",
                    }}
                  >
                    Terms & Conditions | Privacy policy
                  </Typography>
                </Box>

                <Grid item></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
