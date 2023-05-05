import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Fetchapi() {
  const [data, setData] = useState("");
  localStorage.setItem("Randomuser", JSON.stringify(data));
  let ls = JSON.parse(localStorage.getItem("Randomuser")) || data;
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let result = await axios.get("https://randomuser.me/api/");
    if (data === "") setData(result.data.results);
    else setData([...data, result.data.results[0]]);
  }
  return (
    <>
      <Grid
        container
        columnSpacing={3}
        rowGap={3}
        display="flex"
        justifyContent={"space-around"}
        sx={{ p: "50px", md: { marginLeft: "50px" } }}
      >
        {ls &&
          ls.map((element, index) => (
            <Grid item xs={10} md={6} lg={4}>
              <Card sx={{ backgroundColor: "#cfd8dc", borderRadius: "20px" }}>
                <CardContent key={element.login.uuid}>
                  <img
                    src={element.picture.medium}
                    alt="userImg"
                    width={"100px"}
                  />
                  <Typography variant="h6">
                    {` ${element.name.first}
                      ${element.name.last}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Button variant="contained" onClick={getData}>
        More Profiles
      </Button>
    </>
  );
}
