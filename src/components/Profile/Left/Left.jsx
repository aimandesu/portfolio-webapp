import classes from "./Left.module.css";

const Left = () => {
  return (
    <>
      <div className={classes.left_container}>
        <div className={`${classes.container_item} ${classes.container_first}`}>
          <img src="./Images/chibi1.png" alt="" />
        </div>
        <div className={`${classes.container_item} ${classes.container_two}`}>
          <h1>Personal Information</h1>
          <p>UiTM Tapah</p>
          <p>Station 18, Ipoh, Perak</p>
          <p>CGPA 3.28</p>
        </div>
        <div className={`${classes.container_item} ${classes.container_three}`}>
          <h1>Technologies Known</h1>
          <p>Android Development - Compose & Flutter</p>
          <p>Web App Development - React Js</p>
          <p>Database - SQL & Firebase</p>
        </div>
      </div>
    </>
  );
};

export default Left;
