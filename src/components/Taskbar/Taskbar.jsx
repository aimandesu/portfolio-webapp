import { useContext, useState } from "react";
import classes from "./Taskbar.module.css";
import ProviderContext from "../Provider/Provider";

const Taskbar = () => {
  // const [test, setTest] = useState(false);

  const ctx = useContext(ProviderContext);

  // const [isProfile, setisProfile] = useState(true);

  // const reverseIsProfile = (toDisplay) => {
  //   toDisplay == "profile" ? setisProfile(true) : setisProfile(false);
  // };

  // const change = () => {
  //   setTest(true);
  // };

  // const afterChange = () => {
  //   var b;
  //   !test ? (b = <h1>first</h1>) : (b = <h1>bro lol</h1>);
  //   return b;
  // };

  return (
    <div className={classes.mainTaskbar}>
      <div className={classes.taskbar}>
        <div className={classes.taskbarItem}>
          <button
            className={classes.iconButton}
            onClick={() => ctx.reverseIsProfile("profile")}
          >
            <span className="material-symbols-outlined">account_box</span>
          </button>
        </div>
        <div className={classes.taskbarItem}>
          <button
            className={classes.iconButton}
            onClick={() => ctx.reverseIsProfile("")}
          >
            <span className="material-symbols-outlined">computer</span>
          </button>
        </div>
        <div className={`${classes.taskbarItem} ${classes.taskbarItem_3}`}>
          {ctx.isProfile ? <h1>Profile</h1> : <h1>Project</h1>}
        </div>
      </div>
      <div className={classes.container}>
        {ctx.isProfile && <p className={classes.text}>Side jobs? PM Me</p>}
      </div>
    </div>
  );
};

export default Taskbar;
