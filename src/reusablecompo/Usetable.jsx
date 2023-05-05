import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { makeStyles } from "@mui/styles";

import { modalActions } from "../reducers/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { display } from "@mui/system";

const useStyles = makeStyles({});

export default function Tableuse(props) {
  const dispatch = useDispatch();
  const { column, row, btn, title } = props;
  const openModal = useSelector((state) => state.modal.batchlistModal);
  const mentorModal = useSelector((state) => state.modal.mentorlistModal);
  const rejectModal = useSelector((state) => state.modal.rejectModal);
  const approveModal = useSelector((state) => state.modal.approveModal);
  const classes = useStyles();
  const bgColor = "black";

  return (
    <div>
      <Box>
        <Grid
          container
          display={"flex"}
          flexWrap="wrap"
          columnSpacing={5}
          padding={0}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item sm={4} md={2}>
            <Typography
              sx={{
                width: "100px",
                height: "22px",
                textAlign: "left",
                color: "#FAA81D",
                font: "normal normal 600 16px/22px Open Sans",
                fontWeight: "50px",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item sm={4} md={8}>
            <TextField
              id="input"
              sx={{
                width: { lg: "200px", sm: "200px" },
                mt: "5px",
                mb: "5px",
                background: `rgba(188, 188, 203,0.15)`,
                borderRadius: "4px",
                color: "#43425D",
                mr: { lg: "650px" },
                ml: { lg: "450px" },
                border: "0px #BCBCCB",
              }}
              size="small"
              placeholder={"Search"}
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
          {title === "Request list" ? null : (
            <Grid item sm={2} md={2}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "orange",
                  color: "#ffff",
                  border: "1px solid #D89119",
                  borderRadius: "7px",
                  opacity: 1,
                  ml: { lg: "40px" },
                }}
                onClick={() => {
                  if (title === "Batch list") {
                    dispatch(modalActions.modalOpenHandler());
                  } else if (title === "Mentors list") {
                    dispatch(modalActions.mentorModalHandler());
                  }
                }}
              >
                {btn}
              </Button>
            </Grid>
          )}
        </Grid>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                backgroundColor: "#E9EEF7",
                color: "#0D0D0D",
                textAlign: "center",
              }}
            >
              <TableRow>
                {column.map((element, index) => (
                  <TableCell
                    sx={{
                      padding: "00px 10px",
                      fontFamily: "sans-serif",
                      color: "#0D0D0D",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                    key={index}
                  >
                    {element.header === "Select" ? (
                      <Checkbox />
                    ) : (
                      element.header
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row, ind) => (
                <TableRow key={ind}>
                  {column.map((col, index) => (
                    <TableCell key={index} sx={{ textAlign: "center" }}>
                      {row[col.field] === "action" ? (
                        <>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              ml: "20px",
                              color: "#00811A",
                              borderBlockColor: "#00811A",
                              border: "1px solid #00811A",
                            }}
                            onClick={() => {
                              if (title === "Request list")
                                dispatch(modalActions.approveModalOpen());
                            }}
                          >
                            {title === "Request list" ? (
                              props.actionBtn1
                            ) : (
                              <EditOutlinedIcon />
                            )}
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              ml: "20px",
                              color: "#CE000E",
                              borderBlockColor: "#CE000E",
                              border: "1px solid #CE000E",
                            }}
                            onClick={() => {
                              if (title === "Request list")
                                dispatch(modalActions.rejectModalOpen());
                            }}
                          >
                            {title === "Request list" ? (
                              props.actionBtn2
                            ) : (
                              <DeleteIcon />
                            )}
                          </Button>
                        </>
                      ) : row[col.field] === "select" ? (
                        <Checkbox />
                      ) : (
                        row[col.field]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {openModal === true ? props.children : ""}
      {mentorModal === true ? props.children : ""}
      {rejectModal === true ? props.Rejectionmodal : ""}
      {approveModal === true ? props.Approvemodal : ""}
    </div>
  );
}
