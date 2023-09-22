import classes from "./Content.module.css";

const Content = (props) => {
  //props here should terima class or some thing like that
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.container_item} ${classes.item_one}`}>
          <h1>Project Name</h1>
        </div>
        <div className={`${classes.container_item} ${classes.item_two}`}>
          <h1>Some Description and well supposedly leh preview</h1>
        </div>
      </div>
    </>
  );
};

export default Content;
