import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./EditBoard.scss";
import { useDispatch } from "react-redux";
import { createBoard, editBoard } from "../../../../redux/Actions/actions";
const EditBoard = ({ open, setOpen, currentTitle, currentColor, id }) => {
  const [title, setTitle] = useState(currentTitle);
  const [color, setColor] = useState(currentColor);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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

  const handleCreateBoard = () => {
    if (title !== "" && color !== "") {
      dispatch(
        editBoard({
          id: id,
          title: title,
          color: color,
        })
      );
      setOpen(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Modal
        bodyStyle={{ height: 300 }}
        className="CreateBoardModal"
        width={380}
        footer={null}
        title={<span className="Headingboard">Add a name for your board</span>}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Places around the world"
          value={title}
        />
        <div>
          <p className="Headingboard">Select Post Color </p>
          <p>Here are some templates to help you get started</p>
          <Button
            className="SkyBule"
            onClick={() => setColor("#3FE2E2")}
          ></Button>
          <Button
            className="LightPurple"
            onClick={() => setColor("#C582C5")}
          ></Button>
          <Button
            className="LightPink"
            onClick={() => setColor("#FFC0CB")}
          ></Button>
          <Button
            className="Yellow"
            onClick={() => setColor("#FFFF00")}
          ></Button>
        </div>
        {error === true && <p> Please fill all the details </p>}
        <Button onClick={handleCreateBoard} className="CreateBoard">
          Create Board
        </Button>
      </Modal>
    </>
  );
};
export default EditBoard;
