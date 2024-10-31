import TimelineClass from "./TimelineClass";
import TimelineDetails from "./TimelineDetails";
import classes from "./Timeline.module.css";

const Timeline = () => {
  const JobTimeline = [
    new TimelineClass(
      "Mobile Developer",
      "RF Infinite Sdn Bhd",
      "Flutter Developer",
      "Current Position"
    ),
  ];

  return (
    <>
      <div className={classes.timeline_container}>
        <p>Timeline of work</p>
        {JobTimeline.map((timeline, index) => (
          <TimelineDetails key={index} job={timeline} />
        ))}
      </div>
    </>
  );
};

export default Timeline;
