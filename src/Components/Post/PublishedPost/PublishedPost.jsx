import React, { useState } from "react";
import { BookOutlined, BookFilled } from "@ant-design/icons";
import "./PublishedPost.scss";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../Common/Modals/CreatePost/CreatePost";
import ThreeDot from "../../Common/PopoverBoard/ThreeDot";
import { setBookmark } from "../../../redux/Actions/actions";

function PubishedPost({ boardId, posts }) {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const dispatch = useDispatch();
  const handleBookmark = (postId) => {
    dispatch(
      setBookmark({
        boardId: boardId,
        postId: postId,
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {posts.map((post, index) => {
        return (
          <div key={post.postId} className="PublishPost">
            <div className="Post">
              <strong className="posttitle">{post.subject}</strong>
              <div
                style={{
                  display: "flex",
                  marginLeft: "15px",
                }}
              >
                <div
                  onClick={() => handleBookmark(post.postId)}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                >
                  {console.log(post)}
                  {post.isBookmarked === true ? (
                    <BookFilled />
                  ) : (
                    <BookOutlined />
                  )}
                </div>
                <ThreeDot
                  boardId={boardId}
                  postId={post.postId}
                  setOpen={setOpen}
                  setSelectedPost={() => setSelectedPost(post)}
                />
              </div>
            </div>
            <div>
              <img src="" />
            </div>
            <div className="Textarea">
              <span>{post.content}</span>
            </div>
          </div>
        );
      })}
      {selectedPost && (
        <CreatePost
          boardId={boardId}
          postId={selectedPost.postId}
          open={open}
          setOpen={setOpen}
          currentSubject={selectedPost.subject}
          currentContent={selectedPost.content}
        />
      )}
    </div>
  );
}

export default PubishedPost;
