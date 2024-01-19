import { useState } from "react";
import classes from "./Right.module.css";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import Education from "./Education/Education";

const Right = () => {
  const [isTimeline, setisTimeline] = useState(true);

  const isChanged = (toDisplay) => {
    toDisplay == "timeline" ? setisTimeline(true) : setisTimeline(false);
  };

  return (
    <>
      <div className={classes.right_container}>
        <div className={classes.container_item}>
          <h1>GitHub Profile</h1>
          <a href="https://github.com/aimandesu" target="_blank">
            <p>https://github.com/aimandesu</p>
          </a>
        </div>
        <div className={`${classes.container_item} `}>
          {isTimeline ? <h1>Timeline</h1> : <h1>About</h1>}
          <div className={classes.bottom_part}>
            <button onClick={() => isChanged("timeline")}>Timeline</button>
            <button onClick={() => isChanged()}>About</button>
          </div>
          {isTimeline ? <Timeline /> : <About />}
        </div>
        <div className={classes.container_item}>
          <h1>Education</h1>
          <Education />
        </div>
      </div>
    </>
  );
};

export default Right;
