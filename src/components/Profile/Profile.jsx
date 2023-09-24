import Left from "./Left/Left";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.container_part} ${classes.left_part}`}>
          <Left />
        </div>
        <div className={`${classes.container_part} ${classes.right_part}`}>
          <h1>B</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
