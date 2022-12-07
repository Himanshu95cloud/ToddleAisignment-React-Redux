import React from "react";
import Wall from "./Components/Wall/Wall";
import { Card } from "antd";
import YourPost from "./Components/Post/YourPost/YourPost";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  console.log(store);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Card
        bordered={false}
        bodyStyle={{padding:0}}
          style={{
            minHeight: "60vw",
          }}
          className="App"
        >
          <Routes>
            <Route path="/" element={<Wall />}></Route>
            <Route path="/yourposts" element={<YourPost />}></Route>
            <Route path="/bookmarks" element={<Bookmarks />}></Route>
          </Routes>
        </Card>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
