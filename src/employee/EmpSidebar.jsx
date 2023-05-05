import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import InfoCard from "./InfoCard";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";
import Charts from "./Charts";
// import { Link } from "react-router-dom";

export default function EmpSidebar() {
  const [nav, setnav] = useState(false);
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/EmpSidebar");
  };

  const drawerWidth = "75px";
  return (
    <>
      {" "}
      <Box sx={{ display: "flex" }}>
        <Navbar
          Searchbar={<Searchbar placeholder="Search Employee"></Searchbar>}
        ></Navbar>
        {/* <CssBaseline /> */}
        <Box>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List display="flex">
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      alignContent: "center",
                    }}
                    onClick={() => {
                      setnav(true);
                    }}
                  >
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      <DashboardOutlinedIcon
                        size="small"
                        sx={{ color: "#086288" }}
                      />
                    </ListItemIcon>
                    <Typography
                      sx={{
                        ml: 0,
                        color: "#086288",
                        fontSize: "0.7em",
                      }}
                    >
                      Dashboard
                    </Typography>
                    {/* <ListItemText
                    sx={{ fontSize: "2px", color: "#086288" }}
                    primary={"Dashboard"}
                  /> */}
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 10 }}>
            <Toolbar />
            <div
              role="presentation"
              onClick={handleClick}
              style={{ marginBottom: "1em", position: "sticky", top: "64px" }}
            >
              <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="#086288" href="/EmpSidebar">
                  HOME
                </Link>
                <Link underline="hover" color="black" href="/Infocard">
                  {nav ? "Dashboard" : "Profile"}
                </Link>
              </Breadcrumbs>
            </div>
            <Box position={"relative"}>{nav ? <Charts /> : <InfoCard />}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
