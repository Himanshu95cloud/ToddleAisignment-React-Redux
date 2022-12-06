import React, { useState } from "react";
import { Button, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./CreatePost.scss";
import { useDispatch } from "react-redux";
import { createPost, editPost } from "../../../../redux/Actions/actions";
const { TextArea } = Input;
const CreatePost = ({
  id,
  open,
  setOpen,
  postId,
  currentSubject,
  currentContent,
}) => {
  const [subject, setSubject] = useState(
    typeof postId === "number" ? currentSubject : ""
  );
  const [content, setContent] = useState(
    typeof postId === "number" ? currentContent : ""
  );
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (e) => {
    if (!(typeof postId === "number")) {
      setSubject("");
      setContent("");
    }
    setOpen(false);
    setError(false);
  };

  const handleCreatePost = () => {
    if (subject !== "" && content !== "") {
      if (typeof postId === "number") {
        dispatch(
          editPost({
            id: id,
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
            id: id,
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
      {typeof postId === "number" ? null : (
        <Button onClick={showModal} className="  CreateNew">
          + Create new post
        </Button>
      )}

      <Modal
        bodyStyle={{ height: 400 }}
        className="CreateBoardModal"
        width={380}
        footer={null}
        title={<span className="Headingboard">Create a post</span>}
        open={open}
        onCancel={handleCancel}
      >
        <p> write something for your post </p>
        <strong>Subject</strong>
        <Input
          placeholder="Places around the world"
          value={subject}
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
          {typeof postId === "number" ? "Update Post" : "Create Post"}
        </Button>
      </Modal>
    </>
  );
};
export default CreatePost;
