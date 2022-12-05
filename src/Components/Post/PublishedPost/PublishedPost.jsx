import React from "react";
import { BookOutlined } from "@ant-design/icons";
import ThreeDot from "../../Common/Popover/ThreeDot";
import "./PublishedPost.scss";

function PubishedPost() {
  return (
    <div className="PublishPost">
      <div className="Post">
        <strong className="posttitle">Goalapogos islands, Ecuador</strong>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <BookOutlined style={{ marginRight: "10px" }} />
          <ThreeDot />
        </div>
      </div>
      <div>
        <img src="" />
      </div>
      <div>
        <p>
          Create a “Toddle Digital Wall” which allows users to create single or
          multiple boards that will enable users to express their thoughts on
          common topics easily. Users can share text and pictures. You are
          required to develop certain functionalities which we have divided into
          2 modules.
        </p>
      </div>
    </div>
  );
}

export default PubishedPost;
