import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";
import "./CreateBoard.scss";
import { useDispatch } from "react-redux";
import { createBoard, editBoard } from "../../../../redux/Actions/actions";
const CreateBoard = ({
  open,
  setOpen,
  boardId,
  currentTitle,
  currentColor,
}) => {
  const [title, setTitle] = useState(
    typeof boardId === "string" ? currentTitle : ""
  );
  const [color, setColor] = useState(
    typeof boardId === "string" ? currentColor : ""
  );
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(typeof boardId === "string" ? currentTitle : "");
    setColor(typeof boardId === "string" ? currentColor : "");
  }, [currentTitle, currentColor, boardId]);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
    if (!(typeof boardId === "string")) {
      setTitle("");
      setColor("");
    }
    setError(false);
  };

  const handleCreateBoard = () => {
    if (title !== "" && color !== "") {
      if (typeof boardId === "string") {
        dispatch(
          editBoard({
            boardId: boardId,
            title: title,
            color: color,
          })
        );
      } else {
        dispatch(
          createBoard({
            title: title,
            color: color,
          })
        );
        setTitle("");
        setColor("");
      }
      setOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {!(typeof boardId === "string") ? (
        <Button onClick={showModal} className="  CreateNew">
          + Create new board
        </Button>
      ) : null}
      <Modal
        bodyStyle={{ height: 300 }}
        className="CreateBoardModal"
        width={380}
        footer={null}
        title={
          <span className="Headingboard">
            {typeof postId === "string"
              ? "Change a name for your board"
              : "Add a name for your board"}
          </span>
        }
        open={open}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Places around the world"
          value={title}
          maxLength={40}
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
        {color !== "" && (
          <>
            {" "}
            <p> Selected Color</p>
            <Button
              style={{ backgroundColor: color }}
              className="SelectColor"
            ></Button>
          </>
        )}

        <Button onClick={handleCreateBoard} className="CreateBoard">
          {typeof boardId === "string" ? "Update Board" : "Create Board"}
        </Button>
        {error === true && <p> Please fill all the details </p>}
      </Modal>
    </>
  );
};
export default CreateBoard;
