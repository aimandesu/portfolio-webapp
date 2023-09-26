import Left from "./Left/Left";
import classes from "./Profile.module.css";
import Right from "./Right/Right";

const Profile = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.container_part} ${classes.left_part}`}>
          <Left />
        </div>
        <div className={`${classes.container_part} ${classes.right_part}`}>
          <Right />
        </div>
      </div>
    </>
  );
};

export default Profile;
