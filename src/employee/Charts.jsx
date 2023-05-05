import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Chart from "react-google-charts";

export default function Charts() {
  const data = [
    ["Mock", "Bad", "Average", "Good", "VeryGood", "Excellent"],
    ["Mock1", "Bad", "Average", undefined, undefined, null],
    ["Mock2", "Bad", "Good", null, null, null],
    ["Mock3", "VeryGood", null, "Good", null, null],
    ["Mock4", "Good", "Average", null, null, "Good"],
    ["Mock5", "Excellent", "Good", null, null, null],
  ];
  const options = {
    chart: { 
      title: "Mock Ratings",
      subtitle: "",
    },
    colors: ["#FAA81D", "#086288", "yellow", "green", "blue"], // customize colors of bars
    bar: { groupWidth: "25%" }, // customize width of bars
    legend: { position: "none" }, // remove color notations
    hAxis: { gridlines: { count: 0, color: "transparent" } }, // remove horizontal lines
    vAxis: { gridlines: { count: 0, color: "#ffff" } },
  };
  return (
    <div>
      <Box component={Card} display="flex" width="100%" height="100%">
        <Box width="25%" p={3} m={(3, 2)} sx={{ border: "1px solid #D3D5DA" }}>
          <Typography variant="h4">Attendance</Typography>
          <Typography>
            <span
              style={{
                color: "#086288",
                font: "font: var(--unnamed-font-style-normal) normal bold 140px/191px var(--unnamed-font-family-open-sans)",
                fontSize: "10em",
                fontWeight: "600",
              }}
            >
              25
            </span>
            <span
              style={{
                font: "font: var(--unnamed-font-style-normal) normal bold 140px/191px var(--unnamed-font-family-open-sans)",
                fontSize: "5em",
                fontWeight: "600",
              }}
            >
              /40
            </span>
          </Typography>
          <Typography>
            Morning:
            <span
              style={{
                color: "#FAA81D",
                font: "font: var(--unnamed-font-style-normal) normal bold 140px/191px var(--unnamed-font-family-open-sans)",
                fontSize: "1em",
                fontWeight: "800",
              }}
            >
              25
            </span>
            /40
          </Typography>
          <Typography>
            Noon:
            <span
              style={{
                color: "#00AEF7",
                font: "font: var(--unnamed-font-style-normal) normal bold 140px/191px var(--unnamed-font-family-open-sans)",
                fontSize: "1em",
                fontWeight: "800",
              }}
            >
              20
            </span>
            /40
          </Typography>
        </Box>
        <Box width="75%" p={3} m={(3, 2)} sx={{ border: "1px solid #D3D5DA" }}>
          <Chart
            chartType="Bar"
            data={data}
            width="100%"
            height="400px"
            options={options}
            legendToggle
          />
        </Box>
      </Box>
    </div>
  );
}
