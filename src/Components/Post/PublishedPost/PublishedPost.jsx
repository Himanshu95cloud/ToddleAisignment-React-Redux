import React, { useState } from "react";
import { BookOutlined, BookFilled } from "@ant-design/icons";
import "./PublishedPost.scss";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../Common/Modals/CreatePost/CreatePost";
import ThreeDot from "../../Common/PopoverBoard/ThreeDot";
import { setBookmark } from "../../../redux/Actions/actions";

function PubishedPost({ id, posts }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleBookmark = (postId) => {
    dispatch(
      setBookmark({
        id: id,
        postId: postId,
      })
    );
  };

  console.log("test");

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post, index) => {
        return (
          <div key={index} className="PublishPost">
            <div className="Post">
              <strong className="posttitle">{post.subject}</strong>
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}
              >
                <div
                  onClick={() => handleBookmark(index)}
                  style={{ marginRight: "10px", marginTop: "3px" }}
                >
                  {console.log(post)}
                  {post.isBookmarked === true ? (
                    <BookFilled />
                  ) : (
                    <BookOutlined />
                  )}
                </div>
                <ThreeDot id={id} postId={index} setOpen={setOpen} />
              </div>
            </div>
            <div>
              <img src="" />
            </div>
            <div className="Textarea">
              <span>{post.content}</span>
            </div>
            <CreatePost
              id={id}
              open={open}
              setOpen={setOpen}
              postId={index}
              currentSubject={post.subject}
              currentContent={post.content}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PubishedPost;
