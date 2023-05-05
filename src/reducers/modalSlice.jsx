import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batchlistModal: false,
  mentorlistModal: false,
  approveModal: false,
  rejectModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpenHandler(state) {
      state.batchlistModal = true;
    },
    modalCloseHandler(state) {
      state.batchlistModal = false;
    },
    mentorModalHandler(state) {
      state.mentorlistModal = true;
    },
    menotrModalCloseHandler(state) {
      state.mentorlistModal = false;
    },
    approveModalOpen(state) {
      state.approveModal = true;
    },
    approveModalClose(state) {
      state.approveModal = false;
    },
    rejectModalOpen(state) {
      state.rejectModal = true;
    },
    rejectModalClose(state) {
      state.rejectModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
