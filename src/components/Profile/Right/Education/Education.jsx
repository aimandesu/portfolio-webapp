import { useState } from "react";
import CertificationClass from "../../../Class/CertificationClass";
import EducationBuilder from "./EducationBuilder";
import classes from "./Education.module.css";

const Education = () => {
  const [isDiploma, setisDiploma] = useState(true);

  const diploma = [
    new CertificationClass("semester one", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester two", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester three", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester four", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester five", "./Images/Mobile/1.jpg"),
  ];
  const degree = [
    new CertificationClass("semester three", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester four", "./Images/Mobile/1.jpg"),
    new CertificationClass("semester five", "./Images/Mobile/1.jpg"),
  ];

  const viewEducation = (educationView) => {
    educationView == "diploma" ? setisDiploma(true) : setisDiploma(false);
  };

  return (
    <>
      <button onClick={() => viewEducation("diploma")}>Diploma</button>
      <button onClick={() => viewEducation("")}>Degree</button>
      {isDiploma ? (
        <EducationBuilder education={diploma} />
      ) : (
        <EducationBuilder education={degree} />
      )}
    </>
  );
};

export default Education;
