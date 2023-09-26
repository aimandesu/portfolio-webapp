import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.item}>
        <div className={classes.item_each}>
          <p>Address</p>
        </div>
        <div className={classes.item_each}>
          <p>Station 18, Ipoh, Perak</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item_each}>
          <p>Work Email</p>
        </div>
        <div className={classes.item_each}>
          <p>somethinglol@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default About;
