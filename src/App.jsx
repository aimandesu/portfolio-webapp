import { useState } from "react";
import Taskbar from "./components/Taskbar/Taskbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Taskbar />
      <Content /> {/* should get from taskbar */}
      <Footer />
    </>
  );
}

export default App;
