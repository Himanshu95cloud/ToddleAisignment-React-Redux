import React from "react";
import Wall from "./Components/Wall/Wall";
import { Card } from "antd";
import YourPost from "./Components/Post/YourPost/YourPost";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <Card
        style={{ minHeight: "40vw", paddingLeft: "20px", paddingRight: "20px" }}
        className="App"
      >
        <Wall />
      </Card>
    </Provider>
  );
}

export default App;
