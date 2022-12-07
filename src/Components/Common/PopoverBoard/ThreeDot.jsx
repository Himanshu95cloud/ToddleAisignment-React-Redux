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

function ThreeDot({
  setOpen,
  boardId,
  postId,
  setSelectedPost,
  setSelectedBoard,
}) {
  const dispatch = useDispatch();
  const handleDeleteBoard = () => {
    dispatch(deleteBoard({ boardId: boardId }));
  };
  const handleDeletePost = () => {
    dispatch(deletePost({ boardId: boardId, postId: postId }));
  };
  const items = [
    {
      label: (
        <span
          className="Popovertext"
          onClick={() => {
            if (typeof postId === "string") {
              setSelectedPost();
            } else {
              setSelectedBoard();
            }
            setOpen(true);
          }}
        >
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
            typeof postId === "string" ? handleDeletePost : handleDeleteBoard
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
