import classes from "./Left.module.css";

const Left = () => {
  return (
    <>
      <div className={classes.left_container}>
        <div className={`${classes.container_item} ${classes.container_first}`}>
          <img src="./Images/profile.jpg" alt="" />
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
        <div
          className={`${classes.container_item} ${classes.container_fourth}`}
        >
          <h1>GitHub Profile</h1>
          <a href="https://github.com/aimandesu" target="_blank">
            <p>https://github.com/aimandesu</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Left;
