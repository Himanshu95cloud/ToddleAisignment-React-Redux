import React, { useState } from "react";
import "./DashBoard.scss";
import BoardChips from "../YourBoard/BoardChips";
import CreateBoard from "../../Common/Modals/CreateBoard/CreateBoard";

function Board({ boards }) {
  const [open, setOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div className="Board">
      <h1>My boards</h1>
      <div className="ChipsBoard">
        {boards.map((board, index) => {
          return (
            <BoardChips
              key={board.boardId}
              title={board.title}
              color={board.color}
              boardId={board.boardId}
              setSelectedBoard={setSelectedBoard}
              setOpen={setOpen}
            />
          );
        })}
      </div>
      {selectedBoard && (
        <CreateBoard
          open={open}
          setOpen={setOpen}
          boardId={selectedBoard.boardId}
          currentColor={selectedBoard.color}
          currentTitle={selectedBoard.title}
        />
      )}
    </div>
  );
}

export default Board;
