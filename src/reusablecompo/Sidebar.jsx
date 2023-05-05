import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Breadcrumbs,
  Button,
  Grid,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ReusebleTable from "./Batchlist";
import Mentor from "./Mentor";
import Student from "./Student";
import { useState } from "react";
import Paper from "@mui/material/Paper";

const drawerWidth = 90;

function Sidebar(props) {
  const [idx, setIndex] = useState(0);

  const { win } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const text = [
    { text: "Batch", path: "/" },
    { text: "Mentor", path: "/Mentor" },
    { text: "Request", path: "/Student" },
  ];
  const drawer = (
    <div
      style={{
        boxShadow: "0px 2px 6px #0000000A",
        backgroundColor: "#086288 0% 0% no-repeat padding-box",
        height: "100vh",
      }}
    >
      <List sx={{ padding: "5px 5px" }}>
        {text.map((text, index) => (
          <ListItem
            key={index.toString()}
            sx={{
              marginTop: `${index === 0 ? "8em" : 0}`,
              direction: "flex",
              flexWrap: "wrap",
              textAlign: "center",
              borderRadius: "10px",
              witdh: "60px",
              Padding: "50px",
              mb: "5px",
              transition: "all 0.5s ease-in-out",
            }}
            id={idx === index ? "active" : ""}
            onClick={(e) => {
              setIndex(index);
              // navigate(text.path);
            }}
            disablePadding
          >
            <ListItemButton
              sx={{
                direction: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                borderRadius: "10px",
                witdh: "60px",
                Padding: "50px",
              }}
            >
              {" "}
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                }}
              >
                {index === 0 ? (
                  <PeopleOutlinedIcon />
                ) : index === 1 ? (
                  <SupervisorAccountOutlinedIcon />
                ) : (
                  <PersonAddAltOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          variant="contained"
          size="small"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Logout
        </Button>
      </List>
    </div>
  );

  const container = win !== undefined ? () => win().document.body : undefined;

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(249,249,249)",
      }}
    >
      <CssBaseline />
      <AppBar
        sx={{
          //   backgroundColor: "white",
          color: "black",
          boxShadow: "0px 2px 6px #0000000A",
        }}
      >
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            flexWrap={"nowrap"}
          >
            <Grid item xs={1} sx={{ display: { sm: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} md={4}>
              <Typography
                variant="h6"
                // sx={{ mr: { lg: "200px" } }}
                noWrap
                component="div"
              >
                <img
                  src="https://technoelevate.com/assets/images/photos(Revised)/new%20Logo%20for%20website%20TY%20transp%20bg%20-15.png"
                  width="188px"
                  height="54px"
                  alt="technoelevate"
                />
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                id="input"
                sx={{
                  width: { lg: "600px", sm: "300px" },
                  mt: "5px",
                  mb: "5px",
                  background: `rgba(188, 188, 203,0.15)`,
                  borderRadius: "4px",
                  color: "#43425D",
                  mr: { lg: "200px" },
                  border: "0px #BCBCCB",
                }}
                size="small"
                placeholder={"Search Mentor/employee"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton sx={{ opacity: 0.2 }}>
                        <SearchOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={2}
              md={1}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{ border: "1px solid #075575", color: "075575" }}
              >
                Logout{" "}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: 0 }, flexShrink: { sm: 0, md: 0, lg: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
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
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        position="relative"
        sx={{
          boxShadow: "0px 2px 6px #0000000A",
          height: "100vh",
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
        }}
      >
        {drawer}
      </Box>
      <Stack sx={{ marginTop: "65px", p: "10px" }}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link
            underline="hover"
            color="#8A8F9C"
            href="/SideBar"
            font=" normal normal 600 16px/22px Open Sans"
          >
            HOME
          </Link>
          <Typography
            sx={{
              color: "#222222",
              font: " normal normal 600 16px/22px Open Sans",
            }}
          >
            {idx === 0 ? "Batch" : idx === 1 ? "Mentor" : "Request"}
          </Typography>
        </Breadcrumbs>

        <Box
          component={Paper}
          sx={{
            flexGrow: 1,
            mt: "2em",
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)`, md: "100%" },
          }}
        >
          <Box sx={{ marginTop: "1em", padding: "" }}>
            {idx === 0 ? (
              <ReusebleTable />
            ) : idx === 1 ? (
              <Mentor />
            ) : (
              <Student />
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win: PropTypes.func,
};

export default Sidebar;
