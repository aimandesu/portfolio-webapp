import { useState } from "react";
import classes from "./Right.module.css";
import Timeline from "./Timeline/Timeline";
import About from "./About/About";
import Education from "./Education/Education"

const Right = () => {
  const [isTimeline, setisTimeline] = useState(true);

  const isChanged = (toDisplay) => {
    toDisplay == "timeline" ? setisTimeline(true) : setisTimeline(false);
  };

  return (
    <>
      <div className={classes.right_container}>
        <div className={classes.container_item}>
          <h1>Aiman Afiq bin Esam</h1>
          <p>Junior Mobile & Web Developer</p>
        </div>
        <div className={`${classes.container_item} `}>
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
