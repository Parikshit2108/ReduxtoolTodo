import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import modalSlice from "./reducers/modalSlice";
import todoSlice from "./reducers/todoSlice";
import accordian from "./reducers/accordianSlice";

// import { applyMiddleware, compose, createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";
// import ReduxThunk from "redux-thunk";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    modal: modalSlice.reducer,
    data: dataSlice.reducer,
    accordian: accordian.reducer,
  },
});
// let store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(ReduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
