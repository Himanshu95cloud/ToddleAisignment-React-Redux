import React from "react";
import "./DashBoard.scss";
import BoardChips from "../YourBoard/BoardChips";
import { useSelector } from "react-redux";
function Board() {
  const { boards } = useSelector((state) => state.boardReducer);
  return (
    <div className="Board">
      <h1>My boards</h1>
      <div>
        {boards.map((board, index) => {
          return (
            <BoardChips title={board.title} color={board.color} id={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
