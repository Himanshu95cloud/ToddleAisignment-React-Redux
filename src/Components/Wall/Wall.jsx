import React, { useEffect, useState } from "react";
import "./Wall.scss";
import { AutoComplete, Input } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import DashBoard from "../Board/DashBoard/DashBoard";
import CreateBoard from "../Common/Modals/CreateBoard/CreateBoard";
import { useSelector } from "react-redux";

function Wall() {
  const [open, setOpen] = useState(false);
  const { boards } = useSelector((state) => state.boardReducer);
  const [filteredBoards, setFilteredBoards] = useState(boards);

  useEffect(() => {
    setFilteredBoards(boards);
  }, [boards]);

  const handleChange = (e) => {
    if (boards?.length > 0) {
      let temp = boards.filter((item) => item.title.includes(e.target.value));
      setFilteredBoards(temp);
    }
  };
  return (
    <div className="Wall">
      <div className="NavBar">
        <span className="ToddleText">
          {" "}
          <CaretRightOutlined fill="brown" /> toddle
        </span>
        <div className="ButtonandSearch">
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            style={{ width: "100%" }}
          >
            <Input.Search
              size="large"
              placeholder="Search"
              onChange={handleChange}
            />
          </AutoComplete>
          <CreateBoard open={open} setOpen={setOpen} />
        </div>
      </div>
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <DashBoard boards={filteredBoards} />
      </div>
    </div>
  );
}

export default Wall;
