import React, { useState } from "react";
import "./BoardChips.scss";
import ThreeDot from "../../Common/PopoverBoard/ThreeDot";
import CreateBoard from "../../Common/Modals/CreateBoard/CreateBoard";
import { Link } from "react-router-dom";
function BoardChips({ title, color, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="BoardChips">
      <div className="BoardBox">
        <Link to="/yourposts" state={{ id: id }}>
          <div className="BoardColor" style={{ backgroundColor: color }}></div>
        </Link>
        <div className="BoardText">
          <span>{title}</span>
        </div>

        <div className="ThreeDot">
          <ThreeDot setOpen={setOpen} id={id} />
        </div>
      </div>
      <CreateBoard
        open={open}
        setOpen={setOpen}
        id={id}
        currentColor={color}
        currentTitle={title}
      />
    </div>
  );
}

export default BoardChips;
