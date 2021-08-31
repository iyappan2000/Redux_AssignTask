import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

export default configureStore(
  {
    reducer: {
      tasks: taskReducer,
    },
  },
  composeWithDevTools(applyMiddleware())
);
