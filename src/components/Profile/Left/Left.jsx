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
          <h2>UiTM Tapah</h2>
          <h2>Station 18, Ipoh, Perak</h2>
          <h2>CGPA 3.28</h2>
        </div>
        <div className={`${classes.container_item} ${classes.container_three}`}>
          <h1>Technologies Known</h1>
          <h2>Android Development - Compose & Flutter</h2>
          <h2>Web App Development - React Js</h2>
          <h2>Database - SQL & Firebase</h2>
        </div>
      </div>
    </>
  );
};

export default Left;
