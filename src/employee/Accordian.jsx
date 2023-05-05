import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import Inputfields from "./Inputfields";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { accordianAction } from "../reducers/accordianSlice";
export default function Accordian(props) {
  const {
    inputs,
    universityName,
    educationType,
    selectList,
    heading,
    addressList,
  } = props;

  const status = useSelector((state) => state.accordian.accordianStatus);
  const fieldStatus = useSelector((state) => state.accordian.fieldStatus);
  const btnStatus = useSelector((state) => state.accordian.btnStatus);

  const dispatch = useDispatch();
  return (
    <div>
      <Accordion expanded={status} sx={{ width: "90vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => {
            status
              ? dispatch(accordianAction.accordianStatusClose())
              : dispatch(accordianAction.accordianStatusOpen());
          }}
        >
          {!status ? <Typography>{heading}</Typography> : ""}
        </AccordionSummary>
        <AccordionDetails>
          <Inputfields
            inputs={inputs}
            selectList={selectList}
            universityName={universityName}
            educationType={educationType}
            addressList={addressList}
          >
            {btnStatus === false ? (
              <Button
                startIcon=<ControlPointIcon />
                onClick={() => {
                  dispatch(accordianAction.fieldStatusOpen());
                  dispatch(accordianAction.accordianStatusClose());
                  dispatch(accordianAction.changeButtonOpen());
                }}
              >
                {" "}
                add{" "}
              </Button>
            ) : (
              <Button
                startIcon=<DeleteIcon />
                onClick={() => {
                  dispatch(accordianAction.fieldStatusOpen());
                  dispatch(accordianAction.accordianStatusClose());
                  dispatch(accordianAction.changeButtonClose());
                }}
              >
                {" "}
                Delete{" "}
              </Button>
            )}
          </Inputfields>
        </AccordionDetails>
      </Accordion>
      {fieldStatus && (
        <Inputfields
          inputs={inputs}
          selectList={selectList}
          universityName={universityName}
          educationType={educationType}
        >
          <Button startIcon=<ControlPointIcon /> onClick={() => {}}>
            {" "}
            add{" "}
          </Button>
        </Inputfields>
      )}
    </div>
  );
}
