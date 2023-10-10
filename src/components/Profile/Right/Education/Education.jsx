import { useState } from "react";
import CertificationClass from "../../../Class/CertificationClass";
import EducationBuilder from "./EducationBuilder";

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
      <button onClick={() => viewEducation("diploma")}>
        <p>Diploma</p>
      </button>
      <button onClick={() => viewEducation("")}>
        <p>Degree</p>
      </button>
      {isDiploma ? (
        <EducationBuilder education={diploma} />
      ) : (
        <EducationBuilder education={degree} />
      )}
    </>
  );
};

export default Education;
