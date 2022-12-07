import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./CreatePost.scss";
import { useDispatch } from "react-redux";
import { createPost, editPost } from "../../../../redux/Actions/actions";
const { TextArea } = Input;
const CreatePost = ({
  boardId,
  open,
  setOpen,
  postId,
  currentSubject,
  currentContent,
}) => {
  const [subject, setSubject] = useState(
    typeof postId === "string" ? currentSubject : ""
  );
  const [content, setContent] = useState(
    typeof postId === "string" ? currentSubject : ""
  );
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setContent(typeof postId === "string" ? currentContent : "");
    setSubject(typeof postId === "string" ? currentSubject : "");
  }, [currentContent, currentSubject, postId]);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (e) => {
    if (!(typeof postId === "string")) {
      setSubject("");
      setContent("");
    }
    setOpen(false);
    setError(false);
  };

  const handleCreatePost = () => {
    if (subject !== "" && content !== "") {
      if (typeof postId === "string") {
        dispatch(
          editPost({
            boardId: boardId,
            postId: postId,
            subject: subject,
            content: content,
          })
        );
      } else {
        dispatch(
          createPost({
            subject: subject,
            content: content,
            boardId: boardId,
          })
        );
        setSubject("");
        setContent("");
      }
      setOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {typeof postId === "string" ? null : (
        <Button onClick={showModal} className="  CreateNew">
          + Create new post
        </Button>
      )}

      <Modal
        bodyStyle={{ height: 400 }}
        className="CreateBoardModal"
        width={380}
        footer={null}
        title={
          <span className="Headingboard">
            {typeof postId === "string" ? "Change Your Post " : "Create a post"}
          </span>
        }
        open={open}
        onCancel={handleCancel}
      >
        <span> write something for your post </span> <br />
        <strong>Subject</strong>
        <Input
          placeholder="Enter subject "
          value={subject}
          maxLength={30}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <div>{/* <p> write something for your post </p> */}</div>
        {/* <div className="Addphoto">
          <p style={{ padding: "0px" }}>Add Your Photo</p>
        </div> */}
        <Upload>
          <Button className="Addphoto" icon={<UploadOutlined />}>
            Add Your Photo
          </Button>
        </Upload>
        <div className="seprator" style={{ marginTop: "30px" }} />
        <h3>What's on your Mind ?</h3>
        <TextArea
          rows={4}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button className="CreateBoard" onClick={handleCreatePost}>
          {typeof postId === "string" ? "Update Post" : "Create Post"}
        </Button>
      </Modal>
    </>
  );
};
export default CreatePost;
