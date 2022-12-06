import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  SET_BOOKMARK,
} from "../Constants/actionTypes";

const defaultState = {
  boards: [],
};

const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      let newBoard = {
        title: action.payload.title,
        posts: [],
        color: action.payload.color,
      };
      return {
        ...state,
        boards: [...state.boards, newBoard],
      };
    case EDIT_BOARD:
      if (state.boards.length < action.payload.id) return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        let board = tempState.boards[action.payload.id];
        let editedBoard = {
          posts: board?.posts?.length > 0 ? board.posts : [],
          title: action.payload.title,
          color: action.payload.color,
        };
        tempState.boards[action.payload.id] = editedBoard;
        return tempState;
      }
    case DELETE_BOARD:
      if (state.boards.length < action.payload.id) return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        tempState.boards.splice(action.payload.id, 1);
        return tempState;
      }
    case CREATE_POST:
      if (state.boards.length < action.payload.id) return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        let newPost = {
          subject: action.payload.subject,
          content: action.payload.content,
          isBookmarked: false,
        };
        tempState.boards[action.payload.id].posts.push(newPost);
        return tempState;
      }
    case EDIT_POST:
      if (
        state.boards.length < action.payload.id &&
        state.boards[action.payload.id].posts.length > action.payload.postId
      )
        return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        let post =
          tempState.boards[action.payload.id].posts[action.payload.postId];
        let editedPost = {
          subject: action.payload.subject,
          content: action.payload.content,
          isBookmarked: post.isBookmarked,
        };
        tempState.boards[action.payload.id].posts[action.payload.postId] =
          editedPost;
        return tempState;
      }

    case DELETE_POST:
      if (
        state.boards.length < action.payload.id &&
        state.boards[action.payload.id].posts.length > action.payload.postId
      )
        return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        tempState.boards[action.payload.id].posts.splice(
          action.payload.postId,
          1
        );
        return tempState;
      }
    case SET_BOOKMARK:
      if (
        state.boards.length < action.payload.id &&
        state.boards[action.payload.id].posts.length > action.payload.postId
      )
        return state;
      else {
        let tempState = JSON.parse(JSON.stringify(state));
        let post =
          tempState.boards[action.payload.id].posts[action.payload.postId];
        let editedPost = {
          subject: post.subject,
          content: post.content,
          isBookmarked: !post.isBookmarked,
        };
        tempState.boards[action.payload.id].posts[action.payload.postId] =
          editedPost;
        return tempState;
      }
    default:
      return state;
  }
};

export default boardReducer;
