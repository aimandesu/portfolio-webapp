import { useState } from "react";
import classes from "./taskbar.module.css";

const Taskbar = () => {
  const [test, setTest] = useState(false);
  const [isProfile, setisProfile] = useState(true);

  const reverseIsProfile = (toDisplay) => {
    toDisplay == "profile" ? setisProfile(true) : setisProfile(false);
  };

  const change = () => {
    setTest(true);
  };

  // const afterChange = () => {
  //   var b;
  //   !test ? (b = <h1>first</h1>) : (b = <h1>bro lol</h1>);
  //   return b;
  // };

  return (
    <div className={classes.taskbar}>
      <div className={classes.taskbarItem}>
        <button
          className={classes.iconButton}
          onClick={() => reverseIsProfile("profile")}
        >
          <span className="material-symbols-outlined">contacts</span>
        </button>
      </div>
      <div className={classes.taskbarItem}>
        <button
          className={classes.iconButton}
          onClick={() => reverseIsProfile("")}
        >
          <span className="material-symbols-outlined">smartphone</span>
        </button>
      </div>
      <div className={classes.taskbarItem}>
        {isProfile ? <h1>Profile</h1> : <h1>Project</h1>}
      </div>
      {/* <button onClick={change}></button> */}
    </div>
  );
};

export default Taskbar;
