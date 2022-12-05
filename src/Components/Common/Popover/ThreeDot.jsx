import React from "react";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { deleteBoard } from "../../../redux/Actions/actions";
import "./Threedots.scss";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function ThreeDot({ setOpen, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBoard({ id: id }));
  };
  const items = [
    {
      label: (
        <span className="Popovertext" onClick={() => setOpen(true)}>
          {" "}
          <EditOutlined /> &nbsp; Edit
        </span>
      ),
      key: "0",
    },
    {
      label: (
        <span className="Popovertext" onClick={handleDelete}>
          {" "}
          <DeleteOutlined /> &nbsp; Delete
        </span>
      ),
      key: "1",
    },
  ];
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
