import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.item}>
        <div className={classes.item_each}>
          <p className={classes.title_line}>Address</p>
        </div>
        <div className={classes.item_each}>
          <p>Station 18, Ipoh, Perak</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item_each}>
          <p className={classes.title_line}>Email</p>
        </div>
        <div className={classes.item_each}>
          <p>aimanafiqbinesam@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default About;
