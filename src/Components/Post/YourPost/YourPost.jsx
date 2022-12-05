import { Button } from "antd";
import React from "react";
import "./YourPost.scss";
import {
  LeftOutlined,
  CaretRightOutlined,
  MinusOutlined,
  BookOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import PubishedPost from "../PublishedPost/PublishedPost";
import CreatePost from "../../Common/Modals/CreatePost/CreatePost";
function YourPost() {
  return (
    <div className="YourPost">
      <div className="Header">
        <div className="NavBar">
          <LeftOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          <CaretRightOutlined
            style={{ marginTop: "10px", cursor: "pointer" }}
          />
          <strong className="PostText">Places around the world</strong>
        </div>

        <div className="NavBar">
          <SearchOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
          <MinusOutlined style={{ marginTop: "10px" }} rotate={90} />
          <BookOutlined style={{ marginTop: "10px", cursor: "pointer" }} />
        </div>
      </div>
      <div style={{ backgroundColor: "aqua", borderRadius: "4px" }}>
        <div className="PostButton">
          <span className="HeadingYourPost">Your posts</span>
          <CreatePost />
        </div>
        <div className="PostData">
          <PubishedPost />
        </div>
      </div>
      {/* <div className="Nodata">
        <p className="Nothingheretext">Nothing here yet</p>
        <p className="Createyourtext">
          Create your first post by click on the '+' button above
        </p>
      </div> */}
    </div>
  );
}
export default YourPost;
