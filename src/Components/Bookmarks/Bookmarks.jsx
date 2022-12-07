import { Button, AutoComplete, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./Bookmarks.scss";
import {
  LeftOutlined,
  CaretRightOutlined,
  MinusOutlined,
  BookOutlined,
  SearchOutlined,
  BookFilled,
} from "@ant-design/icons";
import PubishedPost from "../Post/PublishedPost/PublishedPost";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Bookmarks() {
  const location = useLocation();
  const boardId = location.state.boardId;
  const color = location.state.color;
  const { boards } = useSelector((state) => {
    return state.boardReducer;
  });

  const board = boards.find((item) => item.boardId === boardId);

  const bookmarkedPosts = board.posts.filter((item) => item.isBookmarked);

  return (
    <div className="YourPost">
      <div className="Header">
        <div className="NavBar">
          <Link to="/yourposts" state={{ boardId: boardId }}>
            <LeftOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          </Link>
          <CaretRightOutlined
            style={{ marginTop: "10px", cursor: "pointer" }}
          />
          <strong className="PostText">My bookmarks</strong>
        </div>
        <div>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: 250 }}
          >
            <Input.Search size="large" placeholder="Search" />
          </AutoComplete>
          <BookFilled
            height="3em"
            style={{ marginLeft: "20px", cursor: "pointer" }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: color, borderRadius: "4px" }}>
        <div className="PostData">
          <PubishedPost boardId={boardId} posts={bookmarkedPosts} />
        </div>
      </div>
    </div>
  );
}
export default Bookmarks;
