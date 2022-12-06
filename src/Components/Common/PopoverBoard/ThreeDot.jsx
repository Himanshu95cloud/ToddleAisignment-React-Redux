import React from "react";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { deleteBoard, deletePost } from "../../../redux/Actions/actions";
import "./Threedots.scss";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function ThreeDot({ setOpen, id, postId }) {
  const dispatch = useDispatch();
  const handleDeleteBoard = () => {
    dispatch(deleteBoard({ id: id }));
  };
  const handleDeletePost = () => {
    dispatch(deletePost({ id: id, postId: postId }));
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
        <span
          className="Popovertext"
          onClick={
            typeof postId === "number" ? handleDeletePost : handleDeleteBoard
          }
        >
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
        <div>
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
