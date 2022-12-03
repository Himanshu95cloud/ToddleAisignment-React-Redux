import React from "react";
import "./Board.scss";
import ThreeDot from "../Common/Popover/ThreeDot";
function Board() {
  return (
    <div className="Board">
      <h1>My boards</h1>
      <div className="BoardBox">
        <div className="BoardColor"></div>
        <div className="BoardText">
          <span>Earth Changes and Journeys</span>
        </div>
        <div className="ThreeDot">
          <ThreeDot />
        </div>
      </div>
    </div>
  );
}

export default Board;
