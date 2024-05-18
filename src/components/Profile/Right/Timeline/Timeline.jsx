import TimelineClass from "./TimelineClass";
import TimelineDetails from "./TimelineDetails";
import classes from "./Timeline.module.css";

const Timeline = () => {
  const JobTimeline = [
    new TimelineClass(
      "Internship",
      "RF Infinite Sdn Bhd",
      "Internship Flutter Developer",
      "3 Months"
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
