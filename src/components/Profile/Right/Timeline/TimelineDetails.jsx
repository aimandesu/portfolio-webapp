import classes from "./Timeline.module.css";
const TimelineDetails = (props) => {
  return (
    <>
      <h2>{props.job.name}</h2>
      <div className={classes.container_work}>
        <div className={classes.container_work_item}>
          <span className="material-symbols-outlined">smartphone</span>
        </div>
        <div
          className={`${classes.container_work_item} ${classes.container_work_item_2}`}
        >
          <p>{props.job.company}</p>
          <p>{`${props.job.position} / ${props.job.duration}`}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineDetails;
