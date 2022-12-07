import React, { useState } from "react";
import "./BoardChips.scss";
import ThreeDot from "../../Common/PopoverBoard/ThreeDot";

import { Link } from "react-router-dom";
function BoardChips({ setOpen, title, color, boardId, setSelectedBoard }) {
  return (
    <div className="BoardChips">
      <div className="BoardBox">
        <Link to="/yourposts" state={{ boardId: boardId }}>
          <div className="BoardColor" style={{ backgroundColor: color }}></div>
        </Link>
        <div className="BoardText">
          <span>{title}</span>
        </div>

        <div className="ThreeDot">
          <ThreeDot
            setOpen={setOpen}
            boardId={boardId}
            setSelectedBoard={() =>
              setSelectedBoard({ boardId: boardId, color: color, title: title })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BoardChips;
