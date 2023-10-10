import classes from "./Education.module.css";

const EducationBuilder = (props) => {
  return (
    <>
      <div className={classes.education}>
        {props.education.map((education, index) => (
          <>
            <div className={classes.education_item} key={index}>
              <img src={education.photos} alt="" />
              <p>{education.semester}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default EducationBuilder;
