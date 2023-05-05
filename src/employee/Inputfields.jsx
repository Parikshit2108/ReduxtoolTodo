import { Box, Grid, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

function Inputfields(props) {
  const {
    addressList,
    designation,
    nationality,
    empstatus,
    selectList,
    accountType,
    universityName,
    educationType,
  } = props;
  console.log(addressList);
  return (
    <form>
      <Box sx={{ width: "88vw" }}>
        <Grid
          container
          columnSpacing={2}
          display={"flex"}
          justifyContent={"center"}
          width="100%"
          p={1}
        >
          {props.inputs.map((element, index) => {
            return (
              <Grid
                item
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  mt: "1em",
                  width: "100%",
                }}
                key={index.toString()}
                md={5}
                sm={8}
                xs={12}
                //   justifyContent="center"
              >
                <label style={{ marginBottom: "5px" }}>{element.label}</label>
                {element.type === "Select" ? (
                  <Select
                    sx={{ border: "0.5px solid #707070" }}
                    name={element.name}
                    value={props.inputs.skill}
                    onChange={props.handleChange}
                    key={index}
                    size="small"
                    fullWidth
                  >
                    {element.name === "addressType"
                      ? props.addressList?.map((elm, ind) => (
                          <MenuItem key={ind} value={elm}>
                            {elm}
                          </MenuItem>
                        ))
                      : element.name === "designation"
                      ? designation?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "empStatus"
                      ? empstatus?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "nationality"
                      ? nationality?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "gender"
                      ? selectList?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "state"
                      ? selectList?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "accountType"
                      ? accountType?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "universityName"
                      ? universityName?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : element.name === "educationType"
                      ? educationType?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))
                      : selectList?.map((e, ind) => (
                          <MenuItem key={ind} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                  </Select>
                ) : (
                  <TextField
                    fullWidth={true}
                    sx={{
                      height: "3em" /*border: "0.5px solid #707070" */,
                    }}
                    size="small"
                    type={element.type}
                    name={element.name}
                    onChange={props.handleChange}
                    placeholder={element.placeholder}
                  />
                )}
              </Grid>
            );
          })}
          {/* {props.children} */}
          <Grid
            item
            md={5}
            sm={8}
            xs={8}
            // alignContent="center"
            sx={{
              alignContent: "end",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              mt: "4em",
              // ml: "1em",
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default Inputfields;
