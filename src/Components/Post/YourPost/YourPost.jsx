import { AutoComplete, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./YourPost.scss";
import {
  LeftOutlined,
  CaretRightOutlined,
  MinusOutlined,
  BookOutlined,
} from "@ant-design/icons";
import PubishedPost from "../PublishedPost/PublishedPost";
import CreatePost from "../../Common/Modals/CreatePost/CreatePost";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function YourPost() {
  const location = useLocation();
  const boardId = location.state.boardId;

  const { boards } = useSelector((state) => state.boardReducer);
  const board = boards.find((item) => item.boardId === boardId);
  let posts = board.posts;
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [boards]);

  const handleSearchPost = (e) => {
    if (posts.length > 0) {
      setFilteredPosts(
        posts.filter((item) => item.subject.includes(e.target.value))
      );
    }
  };
  return (
    <div className="YourPost">
      <div className="Header">
        <div className="NavBar">
          <Link to="/">
            <LeftOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          </Link>
          <CaretRightOutlined
            style={{ marginTop: "10px", cursor: "pointer" }}
          />
          <strong className="PostText">{board.title}</strong>
        </div>

        <div className="NavBar">
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{ width: 250 }}
          >
            <Input.Search
              onChange={handleSearchPost}
              size="large"
              placeholder="Search"
            />
          </AutoComplete>
          <MinusOutlined style={{ marginTop: "10px" }} rotate={90} />
          <Link
            to="/bookmarks"
            state={{ boardId: boardId, color: board.color }}
          >
            <BookOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundColor: board.color,
          borderRadius: "4px",
          minHeight: "60vw",
        }}
      >
        <div className="PostButton">
          <span className="HeadingYourPost">Your posts</span>
          <CreatePost boardId={boardId} open={open} setOpen={setOpen} />
        </div>
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
export default YourPost;
