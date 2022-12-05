import React from "react";
import "./Wall.scss";
import { AutoComplete, Input } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import DashBoard from "../Board/DashBoard/DashBoard";
import CreateBoard from "../Common/Modals/CreateBoard/CreateBoard";

function Wall() {
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
            dropdownMatchSelectWidth={500}
            style={{ width: 250 }}
          >
            <Input.Search size="large" placeholder="Search" />
          </AutoComplete>
          <CreateBoard />
        </div>
      </div>
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <DashBoard />
      </div>
    </div>
  );
}

export default Wall;
