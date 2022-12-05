import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
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

    default:
      return state;
  }
};

export default boardReducer;
