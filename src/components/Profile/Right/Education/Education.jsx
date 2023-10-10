import CertificationClass from "../../../Class/CertificationClass";
import classes from "./Education.module.css"

const Education = () => {
  const diploma = [
    new CertificationClass("semester one", ""),
    new CertificationClass("semester two", ""),
    new CertificationClass("semester three", ""),
    new CertificationClass("semester four", ""),
    new CertificationClass("semester five", ""),
  ];
  const degree = [new CertificationClass("semester one", [])];

  return (
    <>
      <div className={classes.education}>
        {diploma.map((education, index) => (
            <div>tst</div>
        ))}
      </div>
    </>
  );
};

export default Education;
