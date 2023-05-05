// material UI import
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

// react imports
import React, { useEffect, useState } from "react";

// project imports
// import "./Select.scss";

export default function Dropdown({
  options,
  label,
  dropdownId,
  eleClass,
  eleWidth,
  itemSelected,
  keys,
  multiselect,
  selectedVal,
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [multiSelectedValue, setMultiSelectedValue] = useState([]);

  useEffect(() => {
    if (selectedVal) setSelectedValue(selectedVal);
  }, [selectedVal]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    itemSelected(event.target.value);
  };

  const handleMultiSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setMultiSelectedValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Box sx={{ p: 3, pb: 0, minWidth: eleWidth }}>
        <FormControl fullWidth size="small">
          <InputLabel id="dd-label" className="dropdown-label">
            {label}
          </InputLabel>
          {!multiselect && (
            <Select
              className={eleClass}
              labelId="select-labelId"
              id={dropdownId}
              value={selectedValue}
              label={label}
              onChange={handleChange}
            >
              {(options || []).map((ele, index) => (
                <MenuItem key={`opt-${index}`} value={ele}>
                  {" "}
                  {/* value ={ele[key?.value]}*/}
                  {ele}
                </MenuItem>
              ))}
            </Select>
          )}
          {multiselect && (
            <Select
              className={eleClass}
              labelId="select-labelId-multiple"
              id={dropdownId}
              multiple
              value={multiSelectedValue}
              label={label}
              onChange={handleMultiSelectChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {(options || []).map((ele, index) => (
                <MenuItem key={`opt-${index}`} value={ele}>
                  <Checkbox checked={multiSelectedValue.indexOf(ele) > -1} />
                  <ListItemText primary={ele} />
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </Box>
    </>
  );
}
