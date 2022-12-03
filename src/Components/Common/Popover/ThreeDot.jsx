import React from "react";
import { Dropdown } from "antd";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const items = [
  {
    label: (
      <span>
        {" "}
        <EditOutlined /> &nbsp; Edit
      </span>
    ),
    key: "0",
  },
  {
    label: (
      <span>
        {" "}
        <DeleteOutlined /> &nbsp; Delete
      </span>
    ),
    key: "1",
  },
];

function ThreeDot() {
  return (
    <div className="ThreeDot">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <div onClick={(e) => e.preventDefault()}>
          <EllipsisOutlined
            rotate={90}
            style={{ color: "black", cursor: "pointer" }}
          />
        </div>
      </Dropdown>
    </div>
  );
}

export default ThreeDot;
