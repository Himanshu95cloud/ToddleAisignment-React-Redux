import React from "react";
import { Button } from "antd";
import "./Button.scss";

function CreateButton(props) {
  return (
    <div className="CreateButton">
      <Button className="CreateNew">+ Create new board</Button>
    </div>
  );
}
export default CreateButton;
