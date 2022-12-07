import { AutoComplete, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./Bookmarks.scss";
import {
  LeftOutlined,
  CaretRightOutlined,
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
  const [filteredPosts, setFilteredPosts] = useState(bookmarkedPosts);

  useEffect(() => {
    setFilteredPosts(bookmarkedPosts);
  }, [bookmarkedPosts]);

  const handleSearchPost = (e) => {
    if (bookmarkedPosts.length > 0) {
      setFilteredPosts(
        bookmarkedPosts.filter((item) => item.subject.includes(e.target.value))
      );
    }
  };

  return (
    <div className="YourPost">
      <div className="Header">
        <div className="NavBar">
          <Link to="/yourposts" state={{ boardId: boardId }}>
            <LeftOutlined style={{ marginTop: "15px", cursor: "pointer" }} />
          </Link>
          <CaretRightOutlined
            style={{ marginTop: "15px", cursor: "pointer" }}
          />
          <strong className="PostText">My bookmarks</strong>
        </div>
        <div style={{ display: "flex" }}>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            style={{ width: "100%" }}
          >
            <Input.Search
              size="large"
              placeholder="Search"
              onChange={handleSearchPost}
            />
          </AutoComplete>
          <BookFilled
            style={{ marginLeft: "20px", cursor: "pointer", marginTop: "10px" }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: color,
          borderRadius: "4px",
          minHeight: "60vw",
        }}
      >
        <div className="PostData">
          <PubishedPost boardId={boardId} posts={filteredPosts} />
          {filteredPosts?.length === 0 && (
            <div className="Nodata">
              <p className="Nothingheretext">Nothing here yet</p>
              <p className="Createyourtext">
                Create your first post by click on the '+' button above
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Bookmarks;
