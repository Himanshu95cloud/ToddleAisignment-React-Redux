import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./CreateBoard.scss";
const CreateBoard = () => {
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
      <Button onClick={showModal} className="CreateNew">
        + Create new board
      </Button>

      <Modal
        footer={null}
        title="Add aname for your board"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input />
        <h4>Select Post Color </h4>
        <span>Here are some templates to help you get started</span>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Modal>
    </>
  );
};
export default CreateBoard;
