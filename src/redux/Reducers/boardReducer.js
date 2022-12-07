import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  SET_BOOKMARK,
} from "../Constants/actionTypes";
import uuid from "react-uuid";

const defaultState = {
  boards: [],
};

const boardReducer = (state = defaultState, action) => {
  let tempState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CREATE_BOARD:
      let newBoard = {
        boardId: uuid(),
        title: action.payload.title,
        posts: [],
        color: action.payload.color,
      };
      return {
        ...state,
        boards: [...state.boards, newBoard],
      };
    case EDIT_BOARD:
      let board = tempState.boards.find(
        (board) => board.boardId === action.payload.boardId
      );
      if (board) {
        board.title = action.payload.title;
        board.color = action.payload.color;
      }
      return tempState;
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter(
          (board) => board.boardId !== action.payload.boardId
        ),
      };
    case CREATE_POST:
      let newPost = {
        postId: uuid(),
        subject: action.payload.subject,
        content: action.payload.content,
        isBookmarked: false,
      };
      const currentBoard = tempState.boards.find(
        (board) => board.boardId === action.payload.boardId
      );
      if (currentBoard) {
        currentBoard.posts.push(newPost);
      }
      return tempState;
    case EDIT_POST:
      const post = tempState.boards
        .find((board) => board.boardId === action.payload.boardId)
        .posts.find((item) => item.postId === action.payload.postId);

      if (post) {
        post.subject = action.payload.subject;
        post.content = action.payload.content;
      }

      return tempState;
    case DELETE_POST:
      const postBoard = tempState.boards.find(
        (item) => item.boardId === action.payload.boardId
      );
      if (postBoard) {
        postBoard.posts = postBoard.posts.filter(
          (post) => post.postId !== action.payload.postId
        );
      }

      return tempState;
    case SET_BOOKMARK:
      const postBookmark = tempState.boards
        .find((board) => board.boardId === action.payload.boardId)
        .posts.find((item) => item.postId === action.payload.postId);

      if (postBookmark) {
        postBookmark.isBookmarked = !postBookmark.isBookmarked;
      }

      return tempState;
    default:
      return state;
  }
};

export default boardReducer;
