import { useState } from "react";
import Taskbar from "./components/Taskbar/Taskbar";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      <Taskbar />
      <Content /> {/* should get from taskbar */}
    </>
  );
}

export default App;
