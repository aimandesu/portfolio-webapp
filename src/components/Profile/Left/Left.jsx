import classes from "./Left.module.css";

const Left = () => {
  return (
    <>
      <div className={classes.left_container}>
        <div className={`${classes.container_item} ${classes.container_first}`}>
          <img srcSet="./Images/profile.jpg" alt="" />
        </div>
        <div
          className={`${classes.container_item} ${classes.container_fourth}`}
        >
          <h1>Aiman Afiq bin Esam</h1>
          <p>Junior Mobile & Web App Developer</p>
        </div>
        <div className={`${classes.container_item} ${classes.container_two}`}>
          <h1>Personal Information</h1>
          <p>Education | UiTM Merbok & Tapah</p>
          <p>Hometown | Station 18, Ipoh, Perak</p>
          <p>CGPA | 3.28</p>
        </div>
        <div className={`${classes.container_item} ${classes.container_three}`}>
          <h1>Technologies Known</h1>
          <p>Android Development - Compose & Flutter</p>
          <p>Web App Development - React Js</p>
          <p>Backend - Express Js</p>
          <p>Database - SQL & Firebase</p>
        </div>
      </div>
    </>
  );
};

export default Left;
