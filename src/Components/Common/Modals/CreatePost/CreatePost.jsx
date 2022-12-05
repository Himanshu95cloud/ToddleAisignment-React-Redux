import React, { useState } from "react";
import { Button, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./CreatePost.scss";
const { TextArea } = Input;
const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showModal} className="  CreateNew">
        + Create new post
      </Button>

      <Modal
        bodyStyle={{ height: 400 }}
        className="CreateBoardModal"
        width={380}
        footer={null}
        title={<span className="Headingboard">Create a post</span>}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p> write something for your post </p>
        <strong>Subject</strong>
        <Input placeholder="Places around the world" />
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
        <TextArea rows={4} />
        <Button className="CreateBoard">Create Post</Button>
      </Modal>
    </>
  );
};
export default CreatePost;
