import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: [],
  mentorData: [],
  reasonData: [],
  approvedData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addBatchListData(state, action) {
      state.temp.push(action.payload);
    },
    addMentorListData(state, action) {
      state.mentorData.push(action.payload);
    },
    addApprovedData(state, action) {
      state.approvedData.push(action.payload);
    },
    addRejectReasons(state, action) {
      state.reasonData.push(action.payload);
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
