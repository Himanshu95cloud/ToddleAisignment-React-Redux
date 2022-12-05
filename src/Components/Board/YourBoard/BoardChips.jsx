import React, { useState } from "react";
import "./BoardChips.scss";
import ThreeDot from "../../Common/Popover/ThreeDot";
import EditBoard from "../../Common/Modals/EditBoard/EditBoard";
function BoardChips({ title, color, id }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="BoardChips">
      <div className="BoardBox">
        <div className="BoardColor" style={{ backgroundColor: color }}></div>
        <div className="BoardText">
          <span>{title}</span>
        </div>
        <div className="ThreeDot">
          <ThreeDot setOpen={setOpen} id={id} />
        </div>
      </div>
      <EditBoard
        open={open}
        setOpen={setOpen}
        currentTitle={title}
        currentColor={color}
        id={id}
      />
    </div>
  );
}

export default BoardChips;
