import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import boardReducer from "./redux/Reducers/boardReducer";

const reducer = combineReducers({
  boardReducer: boardReducer,
});

const store = configureStore({
  reducer,
});

export default store;
