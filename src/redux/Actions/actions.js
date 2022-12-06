import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  SET_BOOKMARK,
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
export const createPost = (payload) => {
  return {
    type: CREATE_POST,
    payload: payload,
  };
};

export const deletePost = (payload) => {
  return {
    type: DELETE_POST,
    payload: payload,
  };
};

export const editPost = (payload) => {
  return {
    type: EDIT_POST,
    payload: payload,
  };
};

export const setBookmark = (payload) => {
  return {
    type: SET_BOOKMARK,
    payload: payload,
  };
};
