import { Button, AutoComplete, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./Bookmarks.scss";
import {
  LeftOutlined,
  CaretRightOutlined,
  MinusOutlined,
  BookOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import PubishedPost from "../Post/PublishedPost/PublishedPost";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Bookmarks() {
  const location = useLocation();
  const id = location.state.id;
  const color = location.state.color;
  const { boards } = useSelector((state) => {
    return state.boardReducer;
  });

  const bookmarkedPosts = boards[id].posts.filter((item) => item.isBookmarked);

  return (
    <div className="YourPost">
      <div className="Header">
        <div className="NavBar">
          <Link to="/yourposts" state={{ id: id }}>
            <LeftOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          </Link>
          <CaretRightOutlined
            style={{ marginTop: "10px", cursor: "pointer" }}
          />
          <strong className="PostText">My bookmarks</strong>
        </div>
      </div>
      <div style={{ backgroundColor: color, borderRadius: "4px" }}>
        <div className="PostData">
          <PubishedPost id={id} posts={bookmarkedPosts} />
        </div>
      </div>
    </div>
  );
}
export default Bookmarks;
