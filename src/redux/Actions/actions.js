import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
} from "../Constants/actionTypes";

export const createBoard = (payload) => {
  return {
    type: CREATE_BOARD,
    payload: payload,
  };
};
export const editBoard = (payload) => {
  return {
    type: EDIT_BOARD,
    payload: payload,
  };
};
export const deleteBoard = (payload) => {
  return {
    type: DELETE_BOARD,
    payload: payload,
  };
};
