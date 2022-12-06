import React, { useState } from "react";
import "./DashBoard.scss";
import BoardChips from "../YourBoard/BoardChips";

function Board({ boards }) {
  return (
    <div className="Board">
      <h1>My boards</h1>
      <div className="ChipsBoard">
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
