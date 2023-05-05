import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accordianStatus: true,
  fieldStatus: false,
  btnStatus: false,
};

const accordian = createSlice({
  name: "accordian",
  initialState,
  reducers: {
    accordianStatusOpen(state) {
      state.accordianStatus = true;
    },
    accordianStatusClose(state) {
      state.accordianStatus = false;
    },
    fieldStatusOpen(state) {
      state.fieldStatus = true;
    },
    fieldStatusClose(state) {
      state.fieldStatus = false;
    },
    changeButtonOpen(state) {
      state.btnStatus = true;
    },
    changeButtonClose(state) {
      state.btnStatus = false;
    },
  },
});
export const accordianAction = accordian.actions;
export default accordian;
